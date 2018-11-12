import { AnyAction } from 'redux'

export interface SsoState {
  credentialResponsePayload: any
}

const initialState = {
  credentialResponsePayload: {
    credentialResponse:{
      suppliedCredentials: []
    }
  }
}

export const ssoReducer = (state = initialState, action: AnyAction): SsoState => {
  switch(action.type) {
    case 'SET_CREDENTIAL_RESPONSE_DATA':
    return { credentialResponsePayload: action.value }
    default:
      return state
  }
}