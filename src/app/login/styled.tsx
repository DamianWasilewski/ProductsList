import { StyledCtaButton } from "app/shared/CtaButton/styled";
import { StyledHintLink } from "app/shared/HintLink/styled";
import { TextFieldInput, TextFieldWrapper } from "app/shared/TextField/styled";
import { styled } from "theme";

export const StyledWrapper = styled.div`
    margin-top: 25rem;
    height: auto;
    max-height: 100vh;
    overflow: hidden;
    padding: 0 2.4rem;

    ${ StyledHintLink } {
        display: block;
        margin: 1.6rem 0;
    }
`;

export const StyledForm = styled.form`

    ${ TextFieldWrapper }:nth-child(n+2) {
        margin-top: 2.4rem;
    }

    ${ TextFieldInput } {
        margin-top: 0.8rem;

        ::placeholder {
            color: ${ props => props.theme.colors.darkGrey };
        }
    }

    ${ StyledCtaButton } {
        margin-top: 5.6rem;
    }
`;

export const StyledPageHeading = styled.h2`
    font-size: 3rem;
    font-weight: 600;
    color: ${ props => props.theme.colors.black };
`;