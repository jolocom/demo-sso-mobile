// import { routeList } from 'src/routeList'
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

//  We first parse the url to get the id and route name.
// We then check to see if the route name is equal to 'authenticate',
// and if so we navigate to the Home component, passing the encodedJWT as a prop.

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