import { CtaButton } from 'app/shared/CtaButton';
import React from 'react';
import { Rating } from '../Rating';
import { ContentWrapper } from "./styled";

interface Props {
    readonly title: string;
    readonly name: string;
    readonly imageUrl: string;
    readonly description: string;
    readonly rating: number;
    readonly isDisabled?: boolean;
}

export const Product = ( { title, name, imageUrl, description, rating, isDisabled = false }: Props ) => {

    const buttonText = isDisabled ? "Unavaliable" : "Show details";

    return (
        <ContentWrapper>
            <img src={ imageUrl } alt={ `${ name }-product` } />
            <span>{ title }</span>
            <span>{ description }</span>
            <Rating rating={ rating } />
            <CtaButton text={ buttonText } isDisabled={ isDisabled } />
        </ContentWrapper>
    );
};