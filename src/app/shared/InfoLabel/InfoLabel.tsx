import React from 'react';
import { StyledInfoLabel } from "./styled";

interface Props {
    text: string;
}

export const InfoLabel = ( { text }: Props ) => {
  
    return <StyledInfoLabel>{ text }</StyledInfoLabel>;
};