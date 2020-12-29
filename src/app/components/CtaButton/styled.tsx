import { styled } from "theme";
import { StyledCtaButttonProps } from "./CtaButton";

export const StyledCtaButton = styled.button<StyledCtaButttonProps>`
    background: ${ props => props.disabled ? `${ props.theme.colors.darkGrey }` : `${ props.theme.colors.darkPurple }` };
    border-radius: 0.4rem;
    width: 100%;
    height: 3.8rem;
    appearance: none;
    border: none;
    font-size: 1.4rem;
    color: white;
    ${ props => !props.disabled ? "cursor: pointer" : "" };

    :hover {
        transition: 0.3s;
        background: white;
        border: 1px solid ${ props => props.disabled ? `${ props.theme.colors.darkGrey }` : `${ props.theme.colors.darkPurple }` };
        color: ${ props => props.disabled ? `${ props.theme.colors.darkGrey }` : `${ props.theme.colors.darkPurple }` };
    }
`;

export const StyledCtaButtonText = styled.div`
    
`;