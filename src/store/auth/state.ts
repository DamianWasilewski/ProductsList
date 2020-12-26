export interface AuthState {
    isLoggingIn: boolean;
    loginError: boolean;
    isLoggedIn: boolean;
}

export const authInitState: AuthState = {
    isLoggedIn: true,
    isLoggingIn: false,
    loginError: false,
}

