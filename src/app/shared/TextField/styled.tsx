import { styled } from "theme";
import { StyledTextFieldProps } from "./TextField";

export const TextFieldWrapper = styled.div<StyledTextFieldProps>`
    position: relative;
    width: 100%;
    font-family: 'Nunito', sans-serif;
    box-sizing: border-box;

    label {
        font-size: 1.4rem;
        font-weight: bold;
        color: ${ props => props.theme.colors.black };
        display: ${ props => props.isLabelVisible ? `` : `none` };
    }

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.laptop ) } {
        width: 39rem;
    }
`;

export const TextFieldInput = styled.input`
    width: 100%;
    height: 4.8rem;
    border-radius: 0.8rem;
    border: ${ props => `0.1rem solid ${ props.theme.colors.lightGrey }` };
    padding: 0 1.4rem;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    padding: 0 1.4rem;
    box-sizing: border-box;

    &::placeholder {
        font-family: 'Nunito', sans-serif;
        color: ${ props => props.theme.colors.black };
        font-weight: bold;
        padding: 0;
    }
`;