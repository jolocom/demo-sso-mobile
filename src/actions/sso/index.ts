import { navigatorReset } from 'src/actions/navigation'
import { JolocomLib } from 'jolocom-lib'
import { routeList } from 'src/routeList'
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
  const encodedCR = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJjcmVkZW50aWFsUmVxdWVzdCI6eyJjcmVkZW50aWFsUmVxdWlyZW1lbnRzIjpbeyJ0eXBlIjpbIkNyZWRlbnRpYWwiLCJQcm9vZk9mTmFtZUNyZWRlbnRpYWwiXSwiY29uc3RyYWludHMiOnsiYW5kIjpbeyI9PSI6W3RydWUsdHJ1ZV19LHsiPT0iOlt0cnVlLHRydWVdfV19fV0sImNhbGxiYWNrVVJMIjoiZGVtb3NzbzovL2F1dGhlbnRpY2F0ZS8ifSwidHlwIjoiY3JlZGVudGlhbFJlcXVlc3QiLCJpYXQiOjE1NDIyODg5NTc4MDQsImlzcyI6ImRpZDpqb2xvOjc5MmIxMDZjZTkzYmM5ZTIwMGY3ODEyZDMzZGJjM2EzNjdjNTdhMGQ1YWYxMWQwOTM1ZWFlMWNhMTNjNWMxNjcja2V5cy0xIn0.8mTgIKaONJpDaOjOf4182OJccXPUWGoV3JuAdjRls9QW9rQC4JKu_64a-1Q79Hh1xQxBTX5sK-0jxPIKGu5gRA'
  const decodedCR = await JolocomLib.parse.interactionJSONWebToken.decode(encodedCR)
  const decodedJwt = await JolocomLib.parse.interactionJSONWebToken.decode(encodedJwt)
  //UI toggling back and forth, add loading screen
  if (decodedJwt.satisfiesRequest(decodedCR.credentialRequest)) {
    dispatch(navigatorReset({ routeName: routeList.Home }))
    // dispatch(setCredentialResponseData(decodedJwt))
  }}
}