import React from 'react';
import { StyledCtaButton, StyledCtaButtonText } from "./styled";

interface Props {
    readonly text: string;
    readonly type?: any;
    readonly isDisabled?: boolean;
    readonly onClick?: () => void;
}

export const CtaButton = ( { text, type = "button", isDisabled, onClick }: Props ) => {
  
    return (
        <StyledCtaButton type={ type } onClick={ onClick }>
            <StyledCtaButtonText>{ text }</StyledCtaButtonText>
        </StyledCtaButton>
    );
};