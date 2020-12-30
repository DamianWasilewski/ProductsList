import { styled } from "theme";
import { keyframes } from 'styled-components';

const spinnerAnimation = keyframes`
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
`;

export const StyledSpinner = styled.div`
    position: relative;
    border-top: 0.4rem solid rgba(255, 255, 255, 0.2);
    border-right: 0.4rem solid rgba(255, 255, 255, 0.2);
    border-bottom: 0.4rem solid rgba(255, 255, 255, 0.2);
    border-left: 0.4rem solid #ffffff;
    border-left: ${ props => `0.4rem solid ${ props.theme.colors.lightPurple }` };
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    animation: ${ spinnerAnimation } 1.1s infinite linear;
    margin: auto;

    &:after {
        border-radius: 50%;
        width: 10rem;
        height: 10rem; 
    }
`;