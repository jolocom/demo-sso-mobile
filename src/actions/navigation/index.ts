import { AnyAction, Dispatch } from 'redux'
import { ssoActions } from 'src/actions/'
import { NavigationActions, NavigationNavigateActionPayload } from 'react-navigation'

export const navigate = (options: NavigationNavigateActionPayload) => {
  return NavigationActions.navigate(options)
}

export const goBack = () => {
  return NavigationActions.back()
}

export const navigatorReset = (newScreen: NavigationNavigateActionPayload) => {
  return NavigationActions.reset({
    index:0,
    actions: [navigate(newScreen)]
  })
}

export const handleDeepLink = (url: string) => {
  return (dispatch: Dispatch<AnyAction>) => {
    const route: string = url.replace(/.*?:\/\//g, '')
    const encodedJwt: string = (route.match(/\/([^\/]+)\/?$/) as string[])[1] || ''
    const routeName: string = route!.split('/')[0]

     if (routeName === 'authenticate') {
      dispatch(ssoActions.handleJWTResponse(encodedJwt))
    }
  }
}