import { navigatorReset } from 'src/actions/navigation'
import { JolocomLib } from 'jolocom-lib'
import { routeList } from 'src/routeList'
import { Dispatch, AnyAction } from 'redux'
import { Linking } from 'react-native'

export const startSignOn = () => {
  return async(dispatch: Dispatch<AnyAction>, getState: Function) => {
    const demoAuthURL = 'https://demo-sso.jolocom.com/authentication-mobile/credentialRequest'
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

// TODO: optimize
export const issueSignedCredential = () => {
  return async(dispatch: Dispatch<AnyAction>, getState: Function) => {
    const demoCredReceiveURL = 'https://demo-sso.jolocom.com/credentialReceive'
    try {
      const res = await fetch(demoCredReceiveURL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJjcmVkZW50aWFsT2ZmZXIiOnsiaW5zdGFudCI6dHJ1ZSwiY2hhbGxlbmdlIjoiaGFoN24iLCJyZXF1ZXN0ZWRJbnB1dCI6e30sImNhbGxiYWNrVVJMIjoiaHR0cHM6Ly9kZW1vLXNzby5qb2xvY29tLmNvbS9yZWNlaXZlLyJ9LCJ0eXAiOiJjcmVkZW50aWFsT2ZmZXJSZXF1ZXN0IiwiaWF0IjoxNTQyMjk4MTI1NDEzLCJpc3MiOiJkaWQ6am9sbzo3OTJiMTA2Y2U5M2JjOWUyMDBmNzgxMmQzM2RiYzNhMzY3YzU3YTBkNWFmMTFkMDkzNWVhZTFjYTEzYzVjMTY3I2tleXMtMSJ9.F1b_t4ZwpepsvIft8DSc0ndPmwKPZN0J_DMTa8u6R0ykwQsDCy3kr7VcpQcSYXcFVq2V7c9LVsPyikjwklXBcQ',
        })
      })
      const tokenData = await res.json()
      const encodedCredReceive = tokenData.token

      Linking.openURL('jolocomwallet://consent/' + encodedCredReceive)
    } catch (error) {
      console.error(error)
    }
  }
}
