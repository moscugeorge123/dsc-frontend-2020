import { on } from '@ngrx/store';
import { SessionLoginRequest, SessionLoginSuccess, SessionLoginFailure } from '../actions';
import { ISessionState } from './state/state.model';

export const sessionLoginReducers = [
  on(SessionLoginRequest, (state: ISessionState) => ({
    ...state,
    login: {
      ...state.login,
      loading: true
    }
  })),
  on(SessionLoginSuccess, (state: ISessionState, payload: any  ) => ({
    ...state,
    login: {
      loading: false,
      error: null,
      data: {
        token: payload.token
      }
    }
  })),
  on(SessionLoginFailure, (state: ISessionState, error: any) => ({
    ...state,
    login: {
      ...state.login,
      loading: false,
      error
    }
  })),
];
