import { StyledHeader } from "app/components/Header/styled";
import { StyledCtaButton } from "app/shared/CtaButton/styled";
import { StyledHintLink } from "app/shared/HintLink/styled";
import { StyledImageWrapper } from "app/shared/imageWrapper/styled";
import { TextFieldInput, TextFieldWrapper } from "app/shared/TextField/styled";
import { styled } from "theme";

export const LoginImageWrapper = styled( StyledImageWrapper )`
    flex-basis: 40%;

    img {
        width: 100%;
    }

    background: no-repeat url( ${ props => props.imgSrc } ) center;
    background-size: cover;
`;

export const StyledWrapper = styled.div`
    height: auto;
    overflow-x: hidden;
    display: flex;
    padding: 0 2.4rem;

    ${ StyledHeader } {
        padding: 0;
        position: static;
    }

    ${ StyledHintLink } {
        display: block;
        margin: 1.6rem 0;
    }

    ${ LoginImageWrapper } {
        display: none;
    }

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.laptop ) } {
        ${ StyledHeader } {
            padding-top: 5.2rem;
            justify-content: normal;
            height: auto;
            width: 70%;
        }

        max-height: 100vh;
        height: 100vh;
        overflow-y: hidden;
        padding: 0;

        ${ LoginImageWrapper } {
            display: block;
        }
    }
`;

export const FormAndHintWrapper = styled.div`
    width: 100%;

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.laptop ) } {
        width: 70%;
    }
`;

export const ContentWrapper = styled.div`
    height: 100%;
    width: 100%;

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.laptop ) } {
        display: flex;
        align-items: center;
        flex-direction: column;
        flex-basis: 50%;
        justify-content: space-between;

        ${ TextFieldWrapper } {
            width: 100%;
        }
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
    width: 100%;
    font-size: 3rem;
    font-weight: 600;
    color: ${ props => props.theme.colors.black };
`;

export const Spacer = styled.div`
`;
