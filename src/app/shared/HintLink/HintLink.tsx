import React from 'react';
import { StyledHintLink } from "./styled";

interface Props {
    readonly text: string;
    readonly url: string;
}

export const HintLink = ( { text, url }: Props ) => {
  
    return <StyledHintLink to={ url }>{ text }</StyledHintLink>;
};