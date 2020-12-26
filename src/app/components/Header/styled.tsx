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
    height: 20rem;
    padding: 0 2.4rem;
    box-sizing: border-box;
    z-index: 99;

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.tablet ) } {
        height: 25rem;
    }

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.laptop ) } {
        padding: 0;
        justify-content: space-around;
    }
`;

export const FiltersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.laptop ) } {
        flex-basis: 60%;
        flex-direction: row;
        order: 1;
    }
`;

export const CheckboxesWrapper = styled.div`
    display: flex;
    margin-top: 2.4rem;

    ${ Wrapper }:nth-child(n+2) {
        margin-left: 3.2rem;
    }

    ${ props => props.theme.mediaQueryFunctions.up( props.theme.breakpoints.laptop ) } {
        margin-top: 0;
        margin-left: 2.4rem;
    }
`;