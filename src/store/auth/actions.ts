import { BaseAction } from '../../utils/reduxUtils';

export enum AuthActionType {
    LOGIN = "LOGIN",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAIL = "LOGIN_FAIL",
}

export type LoginAction = BaseAction<AuthActionType.LOGIN>;

export type LoginSuccessAction = BaseAction<AuthActionType.LOGIN_SUCCESS>;

export type LoginFailAction = BaseAction<AuthActionType.LOGIN_FAIL>;

export function login() {
    return {
        type: AuthActionType.LOGIN
    };
}

export function loginSuccess() {
    return {
        type: AuthActionType.LOGIN_SUCCESS
    };
}

export function loginFail() {
    return {
        type: AuthActionType.LOGIN_FAIL
    }
}

export type AuthActions = LoginAction
    | LoginSuccessAction
    | LoginFailAction