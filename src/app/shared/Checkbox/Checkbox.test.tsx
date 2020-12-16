import React from 'react';

import { render } from 'tests';

import { Checkbox } from './Checkbox';

describe( 'Checkbox', () => {
    
    it( 'should render checkbox component', async () => {
        const wrapper = render( <Checkbox label={ "test" } /> );
    
        expect( wrapper.getByTestId( "filterCheckbox" ) ).toBeInTheDocument;
    } );

    it( 'should render checkbox component with label value that is passed as parameter', async () => {
        const wrapper = render( <Checkbox label={ "test" } /> );
    
        expect( wrapper.getByLabelText( "test" ) ).toBeInTheDocument;
    } );

} );