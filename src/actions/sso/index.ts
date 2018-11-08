import { Dispatch, AnyAction } from 'redux'
// import { navigationActions } from 'src/actions/'

export const startSSO = async () => {

  fetch('http://192.168.2.105:9000/credentialRequest')
  .then((jwt) => {
    console.log(jwt, 'here is the response')
  })

  return (dispatch: Dispatch<AnyAction>) => {
    // navigationActions.handleDeepLink()
  }
}

export const handleJWTResponse = (params: string) => {
  return (dispatch: Dispatch<AnyAction>) => {
  }
}