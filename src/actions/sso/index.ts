import { navigatorReset } from 'src/actions/navigation'
import { JolocomLib } from 'jolocom-lib'
import { routeList } from 'src/routeList'
import { Dispatch, AnyAction } from 'redux'
import { Linking } from 'react-native'

export const startSignOn = () => {
  return async(dispatch: Dispatch<AnyAction>, getState: Function) => {
    const demoAuthURL = 'https://demo-sso.jolocom.com/mobile/credentialRequest'
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

export const issueSignedCredential = () => {
  return async(dispatch: Dispatch<AnyAction>, getState: Function) => {
    const demoCredOfferRequestURL = 'https://demo-sso.jolocom.com/mobile/credentialOfferRequest'
    
    try {
      const tokenData = await fetch(demoCredOfferRequestURL)
      const tokenCredOfferRequest = await tokenData.text()

      Linking.openURL('jolocomwallet://consent/' + tokenCredOfferRequest)
    } catch (error) {
      console.error(error)
    }
  }
}
