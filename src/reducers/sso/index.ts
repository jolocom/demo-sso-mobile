import { AnyAction } from 'redux'

export interface SsoState {

}

const initialState = {}

export const ssoReducer = (state = initialState, action: AnyAction): SsoState => {
  switch(action.type) {
    default:
      return state
  }
}