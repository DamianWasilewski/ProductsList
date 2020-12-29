import React from 'react'
import { render } from '@testing-library/react'
import { theme } from 'theme';
import { Store } from 'redux';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { RootState, store } from 'store';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMockStore } from 'redux-test-utils';

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
};

const allTheProvidersWithMockedState = ( children: any, mockedState: Store<RootState> ) => {
  return (
    <ThemeProvider theme={ theme }>
      <Provider store={ mockedState }>
        <Router>
          { children }
        </Router>
      </Provider>
    </ThemeProvider>
  )
};

const themeProviderOnly = ( { children }: any ) => {
  return (
    <ThemeProvider theme={ theme }>
        { children }
    </ThemeProvider>
  )
};

export const mockStore = ( { auth, products }: RootState ): Store<RootState> => {
  return createMockStore( {
      auth,
      products,
  } ) as any;
};

export * from '@testing-library/react'

export const renderAll = ( ui: any, options: any ) => render( ui, { wrapper: allTheProviders, ...options } );

export const renderThemeOnly = ( ui: any, options: any ) => render( ui, { wrapper: themeProviderOnly, ...options } );

export const renderAllWithMockedStore = ( ui: any, state: any, options: any ) => render( allTheProvidersWithMockedState( ui, state ), { ...options } );