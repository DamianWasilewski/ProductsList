import { styled } from "theme";


export const SearchFieldWrapper = styled.div`
    position: relative;
    width: 100%;

    label {
        display: none;
    }

    input {
        height: 4.8rem;
        border-radius: 0.8rem;
        border: ${ props => `0.1rem solid ${ props.theme.colors.lightGrey }` };
        padding: 0;

        &::placeholder {
            padding-left: 1.5rem;
        }
    }

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.laptop ) } {
        width: 39rem;
    }

`;

export const SearchButton = styled.button`
    appearance: none;
    background: none;
    border: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    outline: none;
    padding: 0;

    svg {
        padding-right: 1.5rem;
    }
`;