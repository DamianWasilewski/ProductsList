import { AuthActionType, AuthActions } from "./actions";
import { AuthState, authInitState } from "./state";

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
                isLoggedIn: true,
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
