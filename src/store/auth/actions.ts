import { AcceptedParamsTypes, Dictionary } from 'utils/httpUtils';
import { BaseAction } from '../../utils/reduxUtils';

export enum AuthActionType {
    LOGIN = "LOGIN",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAIL = "LOGIN_FAIL",
}

export type LoginAction = BaseAction<AuthActionType.LOGIN, Dictionary<AcceptedParamsTypes>>;

export type LoginSuccessAction = BaseAction<AuthActionType.LOGIN_SUCCESS>;

export type LoginFailAction = BaseAction<AuthActionType.LOGIN_FAIL, any>;

export function login( params: Dictionary<AcceptedParamsTypes> ) {
    return {
        type: AuthActionType.LOGIN,
        payload: params
    };
}

export function loginSuccess() {
    return {
        type: AuthActionType.LOGIN_SUCCESS
    };
}

export function loginFail( error: any ) {
    return {
        type: AuthActionType.LOGIN_FAIL,
        payload: error
    }
}