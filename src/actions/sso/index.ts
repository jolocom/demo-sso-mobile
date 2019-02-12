import { navigatorReset } from 'src/actions/navigation'
import { JolocomLib } from 'jolocom-lib'
import { routeList } from 'src/routeList'
import { Dispatch, AnyAction } from 'redux'
import { Linking } from 'react-native'

// 'https://demo-sso.jolocom.com'
const BASE_URL =  'https://9b1a8fae.ngrok.io' 

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

      dispatch(setRemotlyGeneratedToken(tokenPaymentRequest))
      Linking.openURL('jolocomwallet://consent/' + tokenPaymentRequest)
    } catch (error) {
      console.error(error)
    }
  }
}

export const setRemotlyGeneratedToken = (encodedRequestToken: string) => {
  return {
    type: 'SET_TOKEN_REQUEST',
    value: encodedRequestToken
  }
}

export const handleCredResponse = (encodedJwt: string) => {
  return async(dispatch: Dispatch<AnyAction>, getState: Function) => {
    const credRequest = getState().sso.encodedTokenRequest
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
    // const paymentRequest = getState().sso.encodedTokenRequest

    try {
      // const decodedPaymentRequest = await JolocomLib.parse.interactionToken.fromJWT(paymentRequest)
      const decodedPaymentResponse = await JolocomLib.parse.interactionToken.fromJWT(encodedJwt)

      // TODO: add remote validation step
      dispatch(setPaymentResponseData(decodedPaymentResponse.interactionToken.transactionHash))
    } catch (error) {
      console.error(error)
    }
  }
}

export const setPaymentResponseData = (transactionHash: string) => {
  return {
    type: 'SET_PAYMENT_RESPONSE_DATA',
    value: transactionHash
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
