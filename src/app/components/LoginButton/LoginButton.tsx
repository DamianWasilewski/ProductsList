import React from 'react';
import { ContentWrapper } from "./styled";

export const LoginButton = () => {
  
    return <ContentWrapper onClick={ () => console.log('test') }>Log in</ContentWrapper>;
};