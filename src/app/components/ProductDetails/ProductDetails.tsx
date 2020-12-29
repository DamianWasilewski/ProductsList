import { ImageWrapper } from 'app/shared/imageWrapper';
import { InfoLabel } from 'app/shared/InfoLabel';
import { ModalWindow } from 'app/shared/ModalWindow';
import React from 'react';
import { ContentWrapper, Title, TextContent, Description, CloseButton } from "./styled";
import { ReactComponent as CrossIconSvg } from "../../../assets/images/crossIcon.svg";

export interface ProductDetailsProps {
    imgUrl: string;
    title: string;
    description: string;
    isOpen: boolean;
    promo: boolean;
    onClose?: () => void;
}

export const ProductDetails = ( { imgUrl, title, description, isOpen, promo, onClose }: ProductDetailsProps ) => {
  
    return (
        <ModalWindow isOpen={ isOpen }>
            <ContentWrapper data-cy='product-details-popUp'>
                <ImageWrapper imgSrc={ imgUrl }>
                    { promo ? <InfoLabel text={ "promo" } /> : null }
                    <CloseButton data-cy='popUp-close-button' onClick={ onClose }><CrossIconSvg /></CloseButton>
                </ImageWrapper>
                <TextContent>
                    <Title>{ title }</Title>
                    <Description>{ description }</Description>
                </TextContent>
            </ContentWrapper>
        </ModalWindow>
    );
};