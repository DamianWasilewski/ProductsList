import React from 'react'
import { render } from '@testing-library/react'
import { theme } from "theme";
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from 'store';
import { BrowserRouter as Router } from 'react-router-dom';

const allTheProviders = ( { children }: any ) => {
  return (
    <ThemeProvider theme={ theme }>
      <Provider store={ store }>
        <Router>
          { children }
        </Router>
      </Provider>
    </ThemeProvider>
  )
}

const themeProviderOnly = ( { children }: any ) => {
  return (
    <ThemeProvider theme={ theme }>
        { children }
    </ThemeProvider>
  )
}

export * from '@testing-library/react'

export const renderAll = ( ui: any, options: any ) => render( ui, { wrapper: allTheProviders, ...options } );

export const renderThemeOnly = ( ui: any, options: any ) => render( ui, { wrapper: themeProviderOnly, ...options } );