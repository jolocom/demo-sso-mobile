import { AnyAction } from 'redux'

export interface SsoState {
  credentialRequest: string,
  credentialResponsePayload: any
}

const initialState = {
  credentialRequest: '',
  credentialResponsePayload: {
    credentialResponse:{
      suppliedCredentials: []
    }
  }
}

export const ssoReducer = (state = initialState, action: AnyAction): SsoState => {
  switch(action.type) {
    case 'SET_CREDENTIAL_RESPONSE_DATA':
      return {
        ...state,
        credentialResponsePayload: action.value
      }
    case 'SET_CREDENTIAL_REQUEST':
      return {
        ...state,
        credentialRequest: action.value
      }
    default:
      return state
  }
}