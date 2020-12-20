import { StyledCtaButttonProps } from "app/shared/CtaButton";
import { StyledCtaButton } from "app/shared/CtaButton/styled";
import { StyledImageWrapper } from "app/shared/imageWrapper/styled";
import { StyledInfoLabel } from "app/shared/InfoLabel/styled";
import { styled } from "theme";
import { ContentWrapper as RatingContentWrapper } from "../Rating/styled";

export const ContentWrapper = styled.div<StyledCtaButttonProps>`
    margin-top: 2.4rem;
    display: flex;
    flex-flow: column;
    flex-basis: 80%;
    border-radius: 0.8rem;
    background-color: white;
    font-weight: 600;
    height: 40rem;

    ${ StyledImageWrapper } {
        position: relative;
        width: 100%;
        flex-basis: 40%;
        border-radius: 0.8rem 0.8rem 0 0;

        ${ StyledInfoLabel } {
            position: absolute;
            top: 1.4rem;
            background: ${ props => props.theme.colors.darkYellow };
        }
    }

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.tablet ) } {
        flex-basis: 35%;
    }

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.laptop ) } {
        flex-basis: 30%;
    }

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.laptopL ) } {
        flex-basis: 23%;
        margin-left: 1rem;
        margin-right: 1rem;
    }
`;

export const Name = styled.div`
    font-size: 1.8rem;
`;

export const Description = styled.div`
    margin-top: 0.8rem;
    font-size: 1.4rem;
    color: ${ props => props.theme.colors.darkGrey };
`;

export const DetailedContent = styled.div`
    display: flex;
    flex-direction column;
    padding: 1.4rem 1.6rem 2.4rem;
    flex: 1 1 auto;

    ${ RatingContentWrapper } {
        margin-top: auto;
    }

    ${ StyledCtaButton } {
        margin-top: 1.8rem;
    }
`;