import { styled } from "theme";

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${ props => props.theme.colors.paleGrey };
`;

export const ProductsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.tablet ) } {
        justify-content: space-evenly;
    }
`;