import React from 'react';

import { renderThemeOnly } from 'utils/testUtils';

import { SearchField } from './SearchField';

describe( 'SelectField', () => {
    
    it( 'should render checkbox component', async () => {
        const wrapper = renderThemeOnly( <SearchField label={ "test" } />, {} );
    
        expect( wrapper.getByTestId( "searchField" ) ).toBeInTheDocument;
    } );

    it( 'should render checkbox component with label value that is passed as parameter', async () => {
        const wrapper = renderThemeOnly( <SearchField label={ "test" } />, {} );
    
        expect( wrapper.getByLabelText( "test" ) ).toBeInTheDocument;
    } );

    it( 'should render checkbox component with label value that is passed as parameter and onChange function', async () => {
        const changeFunction = () => console.log("test");
        const wrapper = renderThemeOnly( <SearchField label={ "test" } onChange={ changeFunction }/>, {} );
    
        expect( wrapper.getByLabelText( "test" ) ).toBeInTheDocument;
    } );
} );