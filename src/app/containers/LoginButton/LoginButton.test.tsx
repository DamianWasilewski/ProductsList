import React from 'react';
import { authInitState, productsInitState } from 'store';
import { mockStore, renderAllWithMockedStore } from 'utils/testUtils';

import { LoginButton } from "./LoginButton";

describe('LoginButton', () => {
    const loggedInState = mockStore( { auth: { ...authInitState, isLoggedIn: true }, products: { ...productsInitState } } );
    const loggedOutState = mockStore( { auth: { ...authInitState, isLoggedIn: false }, products: { ...productsInitState } } );

    it( 'should render avatar logged in button when user is logged in', () => {
        const wrapper = renderAllWithMockedStore( <LoginButton />, loggedInState, {} );
        
        expect( wrapper.getByTestId( "logged-in-login-button" ) ).toBeInTheDocument();
    } );

    it( 'should render log in button when user is not logged in', () => {
        const wrapper = renderAllWithMockedStore( <LoginButton />, loggedOutState, {} );
        
        expect( wrapper.getByTestId( "logged-out-login-button" ) ).toBeInTheDocument();
    } );
  });