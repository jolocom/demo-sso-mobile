import { StackNavigator } from 'react-navigation'
import { Landing } from 'src/ui/landing/'

const navigationOptions = {
  header: null
}

export const Routes = StackNavigator({
  Landing: { screen: Landing, navigationOptions },
})
