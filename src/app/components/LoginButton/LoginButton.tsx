import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'store/selectors';
import { AvatarWrapper, LoginButtonWrapper, Menu, MenuItem } from "./styled";
import userAvatar from 'assets/images/userAvatar.png';

export const LoginButton = () => {
    const isLoggedIn = useSelector( getIsLoggedIn );
    const [ isMenuOpen, setIsMenuOpen ] = useState( false );

    const renderMenu = () => {
        return (
            <>
                {isMenuOpen ?
                    <Menu>
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
                    <LoginButtonWrapper onClick={ () => console.log('test') }>
                        { "Log in" }
                    </LoginButtonWrapper> :
                    <AvatarWrapper onClick={ () => setIsMenuOpen( !isMenuOpen ) } imgSrc={ userAvatar } >
                        { renderMenu() }
                    </AvatarWrapper> }
            </>
        )
    }
  
    return renderContent();
};