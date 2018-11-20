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

/**
 * @description - Handler for deep linking; id and route name are parsed from url
 * in case route name equals to 'authenticate', handleCredResponse action is called
 * with encoded JWT. Consumption ans subsequent handling is perfordmed here. 
 * @param url - a deep link string with the following schema: appName://routeName/params
 */

export const handleDeepLink = (url: string) => {
  return (dispatch: Dispatch<AnyAction>) => {
    const route: string = url.replace(/.*?:\/\//g, '')
    const encodedJwt: string = (route.match(/\/([^\/]+)\/?$/) as string[])[1] || ''
    const routeName: string = route!.split('/')[0]

     if (routeName === 'authenticate') {
      dispatch(ssoActions.handleCredResponse(encodedJwt))
    }
  }
}