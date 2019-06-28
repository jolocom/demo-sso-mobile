import { createStackNavigator } from "react-navigation";
import { Landing } from 'src/ui/landing'
import { Home } from 'src/ui/home'
import { Authentication } from 'src/ui/interactions'


export enum routeList {
  Landing = 'Landing',
  Home = 'Home',
  Authentication = 'Authentication'
}

export const Routes = createStackNavigator(
  {
    [routeList.Landing]: { screen: Landing, path: '' },
    [routeList.Home]: { screen: Home },
    [routeList.Authentication]: {
      screen: Authentication,
      path: 'authenticate/:encodedJWT'
    }
  },
  {
    initialRouteName: routeList.Landing,
    defaultNavigationOptions: {
      header: null
    }
  }
)
