import { styled } from "theme";
import { StyledCtaButttonProps } from "./CtaButton";

export const StyledCtaButton = styled.button<StyledCtaButttonProps>`
    
    ${ props => props.inverted ? `
            background: white;
            border: 1px solid ${ props.disabled ? `${ props.theme.colors.darkGrey }` : `${ props.theme.colors.lightPurple }` };
            color: ${ props.disabled ? `${ props.theme.colors.darkGrey }` : `${ props.theme.colors.lightPurple }` }
        ` : `
            color: white;
            background: ${ props.disabled ? `${ props.theme.colors.darkGrey }` : `${ props.theme.colors.lightPurple }` };
            border: none` 
    };

    border-radius: 0.4rem;
    width: 100%;
    height: 3.8rem;
    appearance: none;
    font-size: 1.4rem;
    ${ props => !props.disabled ? "cursor: pointer" : "" };

    :hover {
        transition: 0.3s;
        ${ props => props.inverted ? `
                ${ props.disabled ? "" : `border: 1px solid ${ props.theme.colors.lightPurple }` };
                ${ props.disabled ? "" : `color: ${ props.theme.colors.darkPurple }` }
            ` : `
                color: white;
                ${ props.disabled ? `${ props.theme.colors.darkGrey }` : `background: ${ props.theme.colors.darkPurple }` };
            ` 
        };
    }
`;

export const StyledCtaButtonText = styled.div`
    
`;