import { styled } from "theme";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;

    input {
        appearance: none;
        height: 2.4rem;
        width: 2.4rem;
        border-radius: 0.4rem;
        border: ${ props => `0.1rem solid ${ props.theme.colors.lightGrey }` };
    }

    label {
        font-size: 1.4rem;
        font-weight: bold;
        margin-left: 0.8rem;
    }
`;