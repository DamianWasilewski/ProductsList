import React, { useState } from 'react';
import { AvatarWrapper, LoginButtonWrapper, Menu, MenuItem } from "./styled";
import userAvatar from 'assets/images/userAvatar.png';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'store/selectors';
import { useHistory } from "react-router-dom";

export const LoginButton = () => {
    const history = useHistory();
    const isLoggedIn = useSelector( getIsLoggedIn );
    const [ isMenuOpen, setIsMenuOpen ] = useState( false );

    const handleLoginRedirect = () => history.push( '/login' );

    const toggleMenuHandler = () => setIsMenuOpen( !isMenuOpen );
 
    const renderMenu = () => {
        return (
            <>
                {isMenuOpen ?
                    <Menu data-cy='logged-in-user-menu'>
                        <MenuItem>
                            { "Logout" }
                        </MenuItem>
                    </Menu> : null }
            </>
        );
    }

    const renderContent = () => {
        return (
            <>
                { !isLoggedIn ? 
                    <LoginButtonWrapper inverted={ true } data-testid="logged-out-login-button" onClick={ handleLoginRedirect }>
                        { "Log in" }
                    </LoginButtonWrapper> :
                    <AvatarWrapper data-testid="logged-in-login-button" onClick={ toggleMenuHandler } imgSrc={ userAvatar } >
                        { renderMenu() }
                    </AvatarWrapper> }
            </>
        )
    }
  
    return renderContent();
};