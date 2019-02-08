import { navigatorReset } from 'src/actions/navigation'
import { JolocomLib } from 'jolocom-lib'
import { routeList } from 'src/routeList'
import { Dispatch, AnyAction } from 'redux'
import { Linking } from 'react-native'

const BASE_URL = 'https://demo-sso.jolocom.com' 

export const startSignOn = () => {
  return async(dispatch: Dispatch<AnyAction>, getState: Function) => {
    const demoAuthURL = `${BASE_URL}/mobile/credentialRequest`
    try {
      const tokenData = await fetch(demoAuthURL)
      const tokenCredRequest = await tokenData.text()
      dispatch(setRemotlyGeneratedToken(tokenCredRequest))

      Linking.openURL('jolocomwallet://consent/' + tokenCredRequest)
    } catch (error) {
      console.error(error)
    }
  }
}

export const startPaymentInteraction = () => {
  return async(dispatch: Dispatch<AnyAction>, getState: Function) => {
    const demoPaymentRequestURL = `${BASE_URL}/mobile/paymentRequest`
    try {
      const tokenData = await fetch(demoPaymentRequestURL)
      const tokenPaymentRequest = await tokenData.text()
      console.log('paymentRequest: ', PaymentRequest)
      dispatch(setRemotlyGeneratedToken(tokenPaymentRequest))

      Linking.openURL('jolocomwallet://paymentConsent/' + tokenPaymentRequest)
    } catch (error) {
      console.error(error)
    }
  }
}

// TODO: do I need to change this for specific cases or can this stay generic?
export const setRemotlyGeneratedToken = (encodedCredRequestToken: string) => {
  return {
    type: 'SET_CREDENTIAL_REQUEST',
    value: encodedCredRequestToken
  }
}

export const handleCredResponse = (encodedJwt: string) => {
  return async(dispatch: Dispatch<AnyAction>, getState: Function) => {
    const credRequest = getState().sso.credentialRequest
    try {
      const decodedCredRequest = await JolocomLib.parse.interactionToken.fromJWT(credRequest)
      const decodedCredResponse = await JolocomLib.parse.interactionToken.fromJWT(encodedJwt)
      
      if (decodedCredResponse.interactionToken.satisfiesRequest(decodedCredRequest.interactionToken)) {
        dispatch(navigatorReset({ routeName: routeList.Home }))
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export const handlePaymentResponse = (encodedJwt: string) => {
  return async(dispatch: Dispatch<AnyAction>, getState: Function) => {
    const paymentRequest = getState().sso.paymentRequest

    try {
      const decodedPaymentRequest = await JolocomLib.parse.interactionToken.fromJWT(paymentRequest)
      const decodedPaymentResponse = await JolocomLib.parse.interactionToken.fromJWT(encodedJwt)
      console.log(decodedPaymentRequest, decodedPaymentResponse)
    } catch (err) {
      console.log('ERROR: ', err)
    }
  }
}


export const issueSignedCredential = () => {
  return async(dispatch: Dispatch<AnyAction>, getState: Function) => {
    const demoCredOfferRequestURL = `${BASE_URL}/mobile/credentialOfferRequest`
    
    try {
      const tokenData = await fetch(demoCredOfferRequestURL)
      const tokenCredOfferRequest = await tokenData.text()

      Linking.openURL('jolocomwallet://consent/' + tokenCredOfferRequest)
    } catch (error) {
      console.error(error)
    }
  }
}
