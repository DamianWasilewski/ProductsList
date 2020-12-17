import React from 'react';
import { ContentWrapper } from "./styled";

interface Props {
    title: string;
    description: string;
}

export const Product = ( { title, description }: Props ) => {
  
    return (
        <ContentWrapper>
            <span>{ title }</span>
            <span>{ description }</span>
        </ContentWrapper>
    );
};