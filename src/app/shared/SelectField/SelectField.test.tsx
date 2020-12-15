import React from 'react';

import { fireEvent, getByLabelText, render } from 'tests';

import { SelectField } from './SelectField';

const selectOptions = [
    { value: 12, label: 12 },
    { value: 24, label: 24 },
    { value: 36, label: 36 },
];

describe( 'SelectField', () => {
    
    it( 'should have first position from selectOptions array as value after render', async () => {
        const wrapper = render( <SelectField id={ "test" } name={ "test" } selectOptions={ selectOptions }/> );
    
        expect( wrapper.getByTestId( "ProductsPerPageSelect" ) ).toHaveValue( "12" );
    } );

    it( 'should set correct value when onChange is fired' , async () => {
        const wrapper = render( <SelectField id={ "test" } name={ "test" } selectOptions={ selectOptions }/> );

        fireEvent.change( wrapper.getByTestId( "ProductsPerPageSelect" ), { target: { value: selectOptions[1].value } } );
        expect( wrapper.getByTestId( "ProductsPerPageSelect" ) ).toHaveValue( "24" );

    } );
} );