import { Wrapper } from "app/shared/Checkbox/styled";
import { styled } from "theme";

export const StyledHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    background: white;
    width: 100%;
    height: 25rem;
    padding: 0 2.4rem;
    box-sizing: border-box;
`;

export const FiltersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
`;

export const CheckboxesWrapper = styled.div`
    display: flex;
    margin-top: 2.4rem;

    ${ Wrapper }:nth-child(n+2) {
        margin-left: 3.2rem;
    }
`;