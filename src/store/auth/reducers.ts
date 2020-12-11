import {
    LoginAction, LoginFailAction, LoginSuccessAction,
    AuthActionType,
    AuthActions
} from "./actions";
import { AuthState, authInitState } from "./state";

function login( state: AuthState, action: LoginAction ) {
    return {
        ...state,
        isLoggingIn: true,
        loginError: false,
    };
}

function loginSuccess( state: AuthState, action: LoginSuccessAction ) {
    return {
        ...state,
        isLoggingIn: false,
        loginError: false,
    }
}

function loginFail( state: AuthState, action: LoginFailAction ) {
    return {
        ...state,
        isLoggingIn: false,
        loginError: true,
    }
}

export const authReducer = ( state: AuthState = authInitState, action: AuthActions ) => {
    switch ( action.type ) {
        case AuthActionType.LOGIN:
            return {
                ...state,
                isLoggingIn: true,
                loginError: false,
            };
        case AuthActionType.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                loginError: false,
            };
        case AuthActionType.LOGIN_FAIL:
            return {
                ...state,
                isLoggingIn: false,
                loginError: true,
            }
        
        default:
            return state;
    }
}
