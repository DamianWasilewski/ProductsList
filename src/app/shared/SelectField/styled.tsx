import { styled } from "theme";

export const ContentWrapper = styled.div`
    margin-top: 0.8rem;
    label {
        font-size: 1.4rem;
        color: ${ props => props.theme.colors.darkGrey };
    }

    select {
        margin-left: 0.8rem;
        border: ${ props => `0.1rem solid ${ props.theme.colors.grey }` };
        border-radius: 0.4rem;
    }
`;