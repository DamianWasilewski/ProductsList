import { StyledSpinner } from "app/shared/Spinner/styled";
import { styled } from "theme";
import { StyledLoadingContentProps } from "./ProductsList";

export const ContentWrapper = styled.div<StyledLoadingContentProps>`
    display: flex;
    flex-direction: column;

    ${ StyledSpinner } {
        margin-top: 25vh;
    }
`;

export const ProductsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.tablet ) } {
        justify-content: space-evenly;
    }

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.laptop ) } {
        padding: 0 1.2rem;
    }

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.laptopL ) } {
        padding: 0 10.6rem;
    }
`;