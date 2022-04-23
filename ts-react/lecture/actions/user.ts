import { Dispatch, ErrorInfo } from 'react';
import { addPost, AddPostAction } from './post';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT = 'LOG_OUT';

export interface LogInRequestAction {
  type: typeof LOG_IN_REQUEST;
  data: {
    id: string;
    password: string;
  };
}
export interface LogInSuccessAction {
  type: typeof LOG_IN_SUCCESS;
  data: {
    userId: number;
    nickname: string;
  };
}
export interface LogInFailureAction {
  type: typeof LOG_IN_FAILURE;
  error: Error;
}
export interface LogOutAction {
  type: typeof LOG_OUT;
}

export interface ThunkDispatch {
  (thunkAction: ThunkAction): void;
  <A>(action: A): A;
  <TAction>(action: TAction | ThunkAction): TAction;
}

export type ThunkAction = (dispatch: ThunkDispatch) => void;

export const logIn = (data: { id: string; password: string }): ThunkAction => {
  return (
    dispatch: Dispatch<
      | LogInRequestAction
      | LogInSuccessAction
      | LogInFailureAction
      | AddPostAction
    >
  ) => {
    // async action
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: 'jong',
          })
        );
        dispatch(addPost(''));
      }, 2000);
    } catch (e: any) {
      dispatch(logInFailure(e));
    }
  };
};

export const logInRequest = (data: {
  id: string;
  password: string;
}): LogInRequestAction => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

export const logInSuccess = (data: {
  nickname: string;
  userId: number;
}): LogInSuccessAction => {
  return {
    type: LOG_IN_SUCCESS,
    data,
  };
};

export const logInFailure = (error: Error): LogInFailureAction => {
  return {
    type: LOG_IN_FAILURE,
    error,
  };
};

export const logOut = (): LogOutAction => {
  return {
    type: LOG_OUT,
  };
};
