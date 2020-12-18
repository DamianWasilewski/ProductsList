import { StyledCtaButton } from "app/shared/CtaButton/styled";
import { styled } from "theme";

export const ContentWrapper = styled( StyledCtaButton )`
    background: white;
    border: ${ props => `0.1rem solid ${ props.theme.colors.lightPurple }` };
    color: ${ props => props.theme.colors.lightPurple };
    border-radius: 0.4rem;
    width: 9rem;
    font-size: 1.4rem;
    margin-left: auto;

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.laptop ) } {
        order: 2;
        margin-left: 0;
    }
`;