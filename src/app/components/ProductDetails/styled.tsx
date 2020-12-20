import { StyledImageWrapper } from "app/shared/imageWrapper/styled";
import { StyledInfoLabel } from "app/shared/InfoLabel/styled";
import { styled } from "theme";

export const ContentWrapper = styled.div`
    height: 53rem;
    margin: 0 2.4rem;
    border-radius: 0.8rem;
    background: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 8px 32px rgba(17, 18, 20, 0.158514);

    ${ StyledImageWrapper } {
        position: relative;
        width: 100%;
        flex-basis: 60%;
        border-radius: 0.8rem 0.8rem 0 0;

        ${ StyledInfoLabel } {
            position: absolute;
            top: 1.4rem;
            background: ${ props => props.theme.colors.darkYellow };
        }
    }

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.laptop ) } {
        width: 60rem;
    }
`;

export const Title = styled.div`
    width: fit-content;
    margin-top: 2.4rem;
    font-size: 2rem;
    font-weight: bold;
    color: ${ props => props.theme.colors.black };
`;

export const Description = styled.div`
width: fit-content;
    margin-top: 0.8rem;
    font-size: 1.6rem;
    color: ${ props => props.theme.colors.darkGrey };
`;

export const TextContent = styled.div`
    padding: 0 2.4rem;
    flex-basis: 40%;
`;

export const CloseButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 2rem;
    top: 2rem;
    appearance: none;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    background-color: rgba(255, 255, 255, 0.3);
    border: none;
    outline: none;

    :hover {
        transition: 0.3s;
        background-color: rgba(255, 255, 255, 0.6);
    }
`;