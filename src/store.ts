export { default as config } from '../config'
import { NavigationAction } from 'react-navigation'

import {
  createStore,
  applyMiddleware,
  AnyAction as OriginalAnyAction,
} from 'redux'

import thunk, {
  ThunkDispatch as OriginalThunkDispatch,
  ThunkAction as OriginalThunkAction
} from 'redux-thunk'

import { RootState, rootReducer } from 'src/reducers'

export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk)
)

export type AnyAction = OriginalAnyAction | NavigationAction
export type ThunkDispatch = OriginalThunkDispatch<
  RootState,
  null,
  AnyAction
>
export type ThunkAction<
  R = AnyAction | Promise<AnyAction | void>
> = OriginalThunkAction<R, RootState, null, AnyAction>
export type ThunkActionCreator<R = AnyAction | Promise<AnyAction | void>> = (
  ...any: any[]
) => ThunkAction<R>
