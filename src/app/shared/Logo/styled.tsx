import { styled } from "theme";

export const LogoWrapper = styled.div`
    font-size: 2.4rem;
    font-weight: 600;

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.tablet ) } {
        order: 0;
    }
`