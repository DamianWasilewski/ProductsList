import { styled } from "theme";
import { ImageWrapperProps } from ".";

export const StyledImageWrapper = styled.div<ImageWrapperProps>`
    img {
        width: 100%;
    }

    background: no-repeat url( ${ props => props.imgSrc } ) center;
    background-size: cover;

    ${ props => props.isDisabled ? "filter: grayscale()" : "" };
`;