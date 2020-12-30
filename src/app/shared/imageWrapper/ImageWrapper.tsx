import React from 'react';
import { StyledImageWrapper } from "./styled";

export interface ImageWrapperProps {
    imgSrc?: string;
    children?: React.ReactNode
    isDisabled?: boolean;
}

export const ImageWrapper = ( { imgSrc, children, isDisabled }: ImageWrapperProps ) => {
    const content = children ? children : "";

    return <StyledImageWrapper imgSrc={ imgSrc } isDisabled={ isDisabled }>{ content }</StyledImageWrapper>;
};