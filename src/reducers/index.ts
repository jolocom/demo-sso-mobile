import { combineReducers } from 'redux'
import { ssoReducer, SsoState } from 'src/reducers/sso/'

export const rootReducer =  combineReducers({
  sso: ssoReducer
})

export interface RootState {
  readonly sso: SsoState;
}
