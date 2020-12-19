import React from 'react';
import { DefaultInputProps } from '../types';
import { TextFieldWrapper, TextFieldInput } from './styled';

interface TextFieldProps extends DefaultInputProps {
    readonly testId?: string;
    readonly type?: string;
    readonly isLabelVisible?: boolean;
}

export interface StyledTextFieldProps {
    readonly isLabelVisible?: boolean;
}

export const TextField = ( { label, name, value, testId, placeholder, isLabelVisible = true, type = "text", onChange }: TextFieldProps ) => {
    const inputName = name ? name : label;
    const placeholderValue = placeholder ? placeholder : "";

    return (
            <TextFieldWrapper isLabelVisible={ isLabelVisible }>
                <label htmlFor={ label }>
                    { label }
                </label>
                <TextFieldInput
                    data-testid={ testId }
                    type={ type } 
                    placeholder={ placeholderValue }
                    name={ inputName }
                    id={ label }
                    value={ value }
                    onChange={ onChange } />
            </TextFieldWrapper>
    );
};