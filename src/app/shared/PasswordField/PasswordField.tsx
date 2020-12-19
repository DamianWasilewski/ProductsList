import React from 'react';
import { TextField } from '../TextField';
import { DefaultInputProps } from '../types';

interface Props extends DefaultInputProps {}

export const PasswordField = ( { label, placeholder }: Props ) => {
  
    return <TextField label={ label } placeholder={ placeholder } type={ "password" } />;
};