import { AnyAction } from 'redux'

export interface SsoState {
  transactionHash: string,
  encodedTokenRequest: string,
  credentialResponsePayload: any
}

const initialState: SsoState = {
  transactionHash: '',
  encodedTokenRequest: '',
  credentialResponsePayload: {
    credentialResponse:{
      suppliedCredentials: []
    }
  }
}

// TODO not AnyAction, but only one of the SsoActions maybe?

export const ssoReducer = (state = initialState, action: AnyAction): SsoState => {
  switch(action.type) {
    case 'SET_CREDENTIAL_RESPONSE_DATA':
      return {
        ...state,
        credentialResponsePayload: action.value
      }
    case 'SET_TOKEN_REQUEST':
      return {
        ...state,
        encodedTokenRequest: action.value
      }
    case 'SET_PAYMENT_RESPONSE_DATA':
      return {
        ...state,
        transactionHash: action.value
      }
    default:
      return state
  }
}
