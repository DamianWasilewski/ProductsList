import baseStyled, { ThemedStyledInterface } from 'styled-components';

interface Colors {
    lightPurple: string;
    darkPurple: string;
    darkYellow: string;
    paleGrey: string;
    lightGrey: string;
    grey: string;
    darkGrey: string;
    black: string;
};

interface MediaQueryFunctions {
    up: ( breakpoint: string ) => string;
    down: ( breakpoint: string ) => string;
};

interface Breakpoints {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    laptopL: string;
    desktop: string;
};

export interface Theme {
    colors: Colors;
    mediaQueryFunctions: MediaQueryFunctions,
    breakpoints: Breakpoints;
}

const colors: Colors = {
    lightPurple: '#4460F7',
    darkPurple: '#2140E8',
    darkYellow: '#F9A52B',
    paleGrey: '#F0F1F5',
    lightGrey: '#E0E2EA',
    grey: '#B9BDCF',
    darkGrey: '#9194A5',
    black: '#1A1B1D',
}

const mediaQueryFunctions: MediaQueryFunctions = {
    up: ( breakpoint ) => `@media (min-width: ${ breakpoint })`,
    down: ( breakpoint ) => `@media (max-width ${ breakpoint })`,
};

const breakpoints: Breakpoints = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
};

export const theme: Theme = {
    colors,
    mediaQueryFunctions,
    breakpoints,
};

export const styled = baseStyled as ThemedStyledInterface<Theme>;