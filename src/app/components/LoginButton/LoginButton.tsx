import React, { useState } from 'react';
import { AvatarWrapper, LoginButtonWrapper, Menu, MenuItem } from "./styled";
import userAvatar from 'assets/images/userAvatar.png';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'store/selectors';

export const LoginButton = () => {
    const isLoggedIn = useSelector( getIsLoggedIn );
    const [ isMenuOpen, setIsMenuOpen ] = useState( false );

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
                    <LoginButtonWrapper data-testid="logged-out-login-button" onClick={ () => console.log('test') }>
                        { "Log in" }
                    </LoginButtonWrapper> :
                    <AvatarWrapper data-testid="logged-in-login-button" onClick={ () => setIsMenuOpen( !isMenuOpen ) } imgSrc={ userAvatar } >
                        { renderMenu() }
                    </AvatarWrapper> }
            </>
        )
    }
  
    return renderContent();
};