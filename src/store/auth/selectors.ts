import { createSelector } from "reselect";
import { AuthState, RootState } from "store";

export const getAuthState = ( rootState: RootState ): AuthState => rootState.auth;

export const getIsLoggedIn = createSelector<RootState, AuthState, boolean>(
    getAuthState,
    authState => authState.isLoggedIn
);