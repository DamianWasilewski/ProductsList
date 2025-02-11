import { Header } from 'app/containers/Header';
import { CtaButton } from 'app/components/CtaButton';
import { HintLink } from 'app/shared/HintLink';
import { PasswordField } from 'app/shared/PasswordField';
import { TextField } from 'app/shared/TextField';
import React, { useState } from 'react';
import { ContentWrapper, FormAndHintWrapper, LoginImageWrapper, Spacer, StyledPageHeading, StyledForm, StyledWrapper } from './styled';
import loginImage from 'assets/images/loginImage.png';

export const Login = () => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const onUsernameInputChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setUsername( event.target.value );
    };

    const onPasswordInputChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setPassword( event.target.value );
    };

    return (
        <StyledWrapper>
                <LoginImageWrapper imgSrc={ loginImage } />
                <ContentWrapper>
                    <Header areFiltersVisible={ false } isLoginInfoVisible={ false } />
                    <FormAndHintWrapper>
                        <StyledPageHeading>
                            { "Login" }
                        </StyledPageHeading>
                        <StyledForm>
                            <TextField value={ username } placeholder={ "Enter username" } label={ "username" } onChange={ onUsernameInputChange } />
                            <PasswordField value={ password } placeholder={ "Enter password" } label={ "password" } onChange={ onPasswordInputChange } />
                            <CtaButton type={ "submit" } text={ "Log in" } />
                        </StyledForm>
                        <HintLink url={ "/" } text={ "Forgot password?" } />
                    </FormAndHintWrapper>
                    <Spacer>{ "" }</Spacer>
                </ContentWrapper>
        </StyledWrapper>
  );
};          
