import { styled } from "theme";

export const ContentWrapper = styled.div`
    margin-top: 20rem;

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.tablet ) } {
        margin-top: 25rem;
    }
`;