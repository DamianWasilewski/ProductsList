import { StyledCtaButton } from "app/components/CtaButton/styled";
import { StyledImageWrapper } from "app/shared/imageWrapper/styled";
import { styled } from "theme";

export const AvatarWrapper = styled( StyledImageWrapper )`
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    position: relative;
    margin-left: auto;
    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.laptop ) } {
        order: 2;
        margin-left: 0;
    }
`;

export const Menu = styled.ul`
    border-radius: 0.4rem;
    box-shadow: 0px 8px 32px rgba(17, 18, 20, 0.158514);
    background: white;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 6.6rem;
    left: -13.4rem;
    list-style: none;
    z-index: 3;

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.laptop ) } {
        margin-right: 1.2rem;
    }
`;

export const MenuItem = styled.li`
    font-size: 1.4rem;
    padding: 2rem 12.3rem 2rem 1.6rem;
    border-bottom: ${ props => `0.1rem solid ${ props.theme.colors.lightGrey }` };
    transition: 0.25s;
    cursor: pointer;

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        transition: 0.25s;
        background: rgba(68, 96, 247, 0.025);
    }
`;

export const LoginButtonWrapper = styled( StyledCtaButton )`
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