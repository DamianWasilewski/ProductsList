import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from "../store";

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => {
    return ( 
        <Provider store={ store }>
            <Router>
                { children }
            </Router>
        </Provider> 
    );
};
