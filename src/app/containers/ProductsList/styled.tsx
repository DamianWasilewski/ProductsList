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

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.laptop ) } {
        padding: 0 1.2rem;
        justify-content: space-evenly;
    }

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.laptopL ) } {
        padding: 0 10.6rem;
        justify-content: space-evenly;
    }
`;