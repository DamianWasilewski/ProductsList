import { Header } from 'app/components/Header';
import { CtaButton } from 'app/shared/CtaButton';
import { HintLink } from 'app/shared/HintLink';
import { PasswordField } from 'app/shared/PasswordField';
import { TextField } from 'app/shared/TextField';
import React from 'react';
import { StyledPageHeading, StyledForm, StyledWrapper } from './styled';

export const Login = () => {
    return (
        <StyledWrapper>
            <Header areFiltersVisible={ false } isLoginInfoVisible={ false } />
            <StyledPageHeading>
                Login
            </StyledPageHeading>
            <StyledForm>
                <TextField placeholder={ "Enter username" } label={ "username" } />
                <PasswordField placeholder={ "Enter password" } label={ "password" } />
                <CtaButton type={ "submit" } text={ "Log in" } />
            </StyledForm>
            <HintLink url={"/"} text={ "Forgot password?" } />
    </StyledWrapper>
  );
};          
