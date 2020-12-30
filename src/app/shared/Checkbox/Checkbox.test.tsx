import React from 'react';

import { renderThemeOnly } from 'utils/testUtils';

import { Checkbox } from './Checkbox';

describe( 'Checkbox', () => {
    
    it( 'should render checkbox component', async () => {
        const wrapper = renderThemeOnly( <Checkbox label={ "test" } />, {} );
    
        expect( wrapper.getByTestId( "filterCheckbox" ) ).toBeInTheDocument;
    } );

    it( 'should render checkbox component with label value that is passed as parameter', async () => {
        const wrapper = renderThemeOnly( <Checkbox label={ "test" } />, {} );
    
        expect( wrapper.getByLabelText( "test" ) ).toBeInTheDocument;
    } );

} );