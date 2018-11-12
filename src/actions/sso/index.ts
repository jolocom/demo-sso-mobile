import { JolocomLib } from 'jolocom-lib'
import { Dispatch, AnyAction } from 'redux'
import { CredentialResponsePayload } from 'jolocom-lib/js/interactionFlows/credentialResponse/credentialResponsePayload';

export const setCredentialResponseData =  (response: CredentialResponsePayload) => {
  return {
    type: 'SET_CREDENTIAL_RESPONSE_DATA',
    value: response
  }
}

export const handleJWTResponse = (encodedJwt: string) => {
  return async(dispatch: Dispatch<AnyAction>, getState: Function) => {
  const decodedJwt = await JolocomLib.parse.interactionJSONWebToken.decode(encodedJwt)
  dispatch(setCredentialResponseData(decodedJwt))
  }
}