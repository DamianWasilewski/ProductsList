import { styled } from "theme";
import { PaginationButtonProps } from "./Pagination";

export const ContentWrapper = styled.div`
`;

export const PaginationButton = styled.button<PaginationButtonProps>`
    appearance: none;
    border: none;
    background: none;
    padding: 0 0.8rem;
    font-weight: semi-bold;
    font-size: 1.4rem;
    ${ props => !props.disabled ? "cursor: pointer" : "" };
    ${ props => props.disabled ? `color: ${ props.theme.colors.darkGrey }` :
        props.hasSameValueAsCurrentPage ? `color: ${ props.theme.colors.darkPurple }` : "" };
`;