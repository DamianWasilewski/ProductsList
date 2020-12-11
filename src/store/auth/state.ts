export interface AuthState {
    isLoggingIn: boolean;
    loginError: boolean;
}

export const authInitState: AuthState = {
    isLoggingIn: false,
    loginError: false,
}

