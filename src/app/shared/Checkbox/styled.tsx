import { styled } from "theme";
import { StyledCheckboxProps } from "./Checkbox";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    label {
        font-size: 1.4rem;
        font-weight: bold;
        margin-left: 0.8rem;
    }
`;

export const StyledCheckboxInput = styled.input<StyledCheckboxProps>`
        height: 2.4rem;
        width: 2.4rem;
        border-radius: 0.4rem;
        border: ${ props => `0.1rem solid ${ props.theme.colors.lightGrey }` };
        background: url( ${ props => props.imageSrc } ) no-repeat;
        cursor: pointer;
        margin: 0;
`;

export const CustomCheckbox = styled.div<StyledCheckboxProps>`

`;