import { styled } from "theme";

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 34.4rem;
    width: 100%;
    margin: 2.4rem 2.4rem 0;
    background-color: white;
    border-radius: 0.8rem;

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.laptop ) } {
        width: 60rem;
    }
`;

export const Text = styled.div`
    margin-top: 2.4rem;
    font-size: 1.8rem;
    font-weight: 600;
    color: ${ props => props.theme.colors.black };
`;

export const SubText = styled.div`
    font-size: 1.4rem;
    font-weight: 600;
    color: ${ props => props.theme.colors.darkGrey };
`;