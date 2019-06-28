import { Linking } from 'react-native'
import { config, ThunkAction } from 'src/store'
import { StackActions, NavigationActions } from 'react-navigation'


import { JolocomLib } from 'jolocom-lib'
import { routeList } from 'src/routes'
import { JSONWebToken } from 'jolocom-lib/js/interactionTokens/JSONWebToken'
import { CredentialResponse } from 'jolocom-lib/js/interactionTokens/credentialResponse'
import { PaymentResponse } from 'jolocom-lib/js/interactionTokens/paymentResponse'

export const startSignOn = (): ThunkAction => async (dispatch, getState) => {
  const demoAuthURL = `${config.BACKEND_URL}/mobile/credentialRequest`
  try {
    const tokenData = await fetch(demoAuthURL)
    const tokenCredRequest = await tokenData.text()

    Linking.openURL(`${config.CONSENT_DEEPLINK}/${tokenCredRequest}`)
  } catch (error) {
    console.error(error)
  }
}

export const handleInteractionToken = (encodedJWT: string): ThunkAction => {
  return async(dispatch, getState) => {
    const decodedToken = JolocomLib.parse.interactionToken.fromJWT(encodedJWT)

    if(decodedToken.interactionType === 'credentialResponse') {
      dispatch(handleCredResponse(decodedToken))
    }

    if(decodedToken.interactionType === 'paymentResponse') {
      dispatch(handlePaymentResponse(decodedToken))
    }
  }
}
export const startPaymentInteraction = (): ThunkAction => {
  return async (dispatch, getState) => {
    const demoPaymentRequestURL = `${config.BACKEND_URL}/mobile/paymentRequest`
    try {
      const tokenData = await fetch(demoPaymentRequestURL)
      const tokenPaymentRequest = await tokenData.text()

      dispatch(setRemotlyGeneratedToken(tokenPaymentRequest))
      Linking.openURL(`${config.CONSENT_DEEPLINK}/${tokenPaymentRequest}`)
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

export const handleCredResponse = (credResponse: JSONWebToken<CredentialResponse>): ThunkAction => {
  return async (dispatch, getState) => {
    const credRequest = getState().sso.encodedTokenRequest
    try {
      const decodedCredRequest = await JolocomLib.parse.interactionToken.fromJWT(credRequest)

      if (credResponse.interactionToken.satisfiesRequest(decodedCredRequest.interactionToken)) {
        dispatch(
          StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: routeList.Home })],
          })
        )
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export const handlePaymentResponse = (paymentResponse: JSONWebToken<PaymentResponse>): ThunkAction => {
  return async (dispatch, getState) => {
    // const paymentRequest = getState().sso.encodedTokenRequest

    try {
      // const decodedPaymentRequest = await JolocomLib.parse.interactionToken.fromJWT(paymentRequest)
      // TODO: add remote validation step
      dispatch(setPaymentResponseData(paymentResponse.interactionToken.txHash))
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

export const issueSignedCredential = (): ThunkAction => {
  return async (dispatch, getState) => {
    const demoCredOfferRequestURL = `${config.BACKEND_URL}/mobile/credentialOfferRequest`

    try {
      const tokenData = await fetch(demoCredOfferRequestURL)
      const tokenCredOfferRequest = await tokenData.text()

      Linking.openURL(`${config.CONSENT_DEEPLINK}/${tokenCredOfferRequest}`)
    } catch (error) {
      console.error(error)
    }
  }
}

