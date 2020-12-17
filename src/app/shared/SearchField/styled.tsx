import { styled } from "theme";


export const SearchFieldWrapper = styled.div`
    position: relative;

    label {
        color: ${ props => props.theme.colors.lightGrey };
    }
`;