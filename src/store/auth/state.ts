export interface AuthState {
    isLoggingIn: boolean;
    loginError: boolean;
    isLoggedIn: boolean;
}

export const authInitState: AuthState = {
    isLoggedIn: false,
    isLoggingIn: false,
    loginError: false,
}

