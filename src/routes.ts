import { StackNavigator } from 'react-navigation'
import { Landing } from 'src/ui/landing/'
import { Home } from 'src/ui/home/'

const navigationOptions = {
  header: null
}

export const Routes = StackNavigator({
  Landing: { screen: Landing, navigationOptions },
  Home: { screen: Home, navigationOptions }
})
