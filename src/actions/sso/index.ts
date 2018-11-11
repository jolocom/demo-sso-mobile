import { routeList } from 'src/routeList'
import { JolocomLib } from 'jolocom-lib'
import { Dispatch, AnyAction } from 'redux'
import { navigatorReset } from 'src/actions/navigation/'

export const startSSO = async (decodedJwt: any) => {
  return (dispatch: Dispatch<AnyAction>) => {
  }
}

export const handleJWTResponse = (encodedJwt: string) => {
  return async(dispatch: Dispatch<AnyAction>, getState: Function) => {

  const decodedJwt = await JolocomLib.parse.interactionJSONWebToken.decode(encodedJwt)
  console.log(decodedJwt, 'here is your decodedjwt')

  dispatch(navigatorReset({ routeName: routeList.Home }))
  }
}