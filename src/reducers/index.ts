import { combineReducers } from 'redux'
import { navigationReducer } from 'src/reducers/navigation/'
import { NavigationState } from 'react-navigation'
import { ssoReducer, SsoState } from 'src/reducers/sso/'

export const rootReducer =  combineReducers({
  navigation: navigationReducer,
  sso: ssoReducer
})

export interface RootState {
  readonly navigation: NavigationState;
  readonly sso: SsoState;
}
