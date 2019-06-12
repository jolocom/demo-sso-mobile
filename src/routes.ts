import { createStackNavigator } from "react-navigation";
import { Landing } from 'src/ui/landing'


export enum routeList {
  Landing = 'Landing'
}

export const Routes = createStackNavigator(
  {
    [routeList.Landing]: { screen: Landing }
  },
  {
    initialRouteName: routeList.Landing,
    defaultNavigationOptions: {
      header: null
    }
  }
)

