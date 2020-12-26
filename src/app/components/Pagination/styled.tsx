import { styled } from "theme";
import { PaginationButtonProps } from "./Pagination";

export const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: fit-content;
    margin: auto;

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.tablet ) } {
        justify-content: initial;
    }

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.laptop ) } {
        margin: 0;
    }
`;

export const PaginationButton = styled.button<PaginationButtonProps>`
    appearance: none;
    border: none;
    background: none;
    padding: 0 0.4rem;
    font-weight: semi-bold;
    font-size: 1.4rem;
    ${ props => !props.disabled ? "cursor: pointer" : "" };
    ${ props => props.disabled ? `color: ${ props.theme.colors.darkGrey }` :
        props.hasSameValueAsCurrentPage ? `color: ${ props.theme.colors.darkPurple }` : "" };

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.tablet ) } {
        padding: 0 0.8rem;
    }
`;