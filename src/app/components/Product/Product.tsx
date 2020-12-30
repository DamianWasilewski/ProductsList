import { CtaButton } from 'app/components/CtaButton';
import { ImageWrapper } from 'app/shared/imageWrapper';
import { InfoLabel } from 'app/shared/InfoLabel';
import React from 'react';
import { Rating } from '../Rating';
import { ContentWrapper, Name, Description, DetailedContent } from "./styled";

interface Props {
    readonly title: string;
    readonly name?: string;
    readonly imageUrl: string;
    readonly description: string;
    readonly rating: number;
    readonly isDisabled?: boolean;
    readonly promo: boolean;
    readonly onClick: ( title: string, description: string, imgUrl: string, promo: boolean ) => void;
}

export const Product = ( { title, imageUrl, description, rating, isDisabled, promo, onClick }: Props ) => {

    const buttonText = isDisabled ? "Unavaliable" : "Show details";

    const onClickHandler = () => {
        onClick( title, description, imageUrl, promo );
    }

    return (
        <ContentWrapper isDisabled={ isDisabled } data-cy="product-wrapper">
            <ImageWrapper imgSrc={ imageUrl } isDisabled={ isDisabled }>
                { promo ? <InfoLabel text={ "promo" } /> : null }
            </ImageWrapper>
            <DetailedContent>
                <Name data-cy="product-name">{ title }</Name>
                <Description>{ description }</Description>
                <Rating rating={ rating } />
                <CtaButton onClick={ onClickHandler } text={ buttonText } isDisabled={ isDisabled } />
            </DetailedContent>
        </ContentWrapper>
    );
};