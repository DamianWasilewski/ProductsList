import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from 'theme/theme';
import { store } from "../store";
import { ThemeProvider } from 'styled-components';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => {
    return (
    <ThemeProvider theme={ theme } >
        <Provider store={ store }>
            <Router>
                { children }
            </Router>
        </Provider> 
    </ThemeProvider>    
    );
};
