import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 10px;
    }
    body {
        font-family: 'Nunito', sans-serif;
        margin: 0;
        background-color: ${ props => props.theme.colors.paleGrey };
    }
`;

export default GlobalStyle;