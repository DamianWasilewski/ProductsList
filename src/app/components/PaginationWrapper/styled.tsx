import { styled } from "theme";

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 1.4rem 0.8rem;

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.laptop ) } {
        flex-direction: row;
        align-items: center;
        justtify-content: space-around;
    }
`;

export const SearchFieldWrapper = styled.div`
    padding: 0.4rem;

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.laptop ) } {
        order: -1;
    }
`;