import React from 'react';
import { StyledCtaButton, StyledCtaButtonText } from "./styled";

interface Props {
    readonly text: string;
    readonly isDisabled: boolean;
    readonly onClick?: () => void;
}

export const CtaButton = ( { text, isDisabled, onClick }: Props ) => {
  
    return (
        <StyledCtaButton onClick={ onClick }>
            <StyledCtaButtonText>{ text }</StyledCtaButtonText>
        </StyledCtaButton>
    );
};