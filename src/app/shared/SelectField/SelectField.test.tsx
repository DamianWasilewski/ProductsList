import React from 'react';

import { fireEvent } from 'tests';
import { renderThemeOnly } from 'utils/testUtils';

import { SelectField } from './SelectField';

const renderXOptions = ( arrayLength: number ) => {
    const resultArr = [];

    for ( let i = 0; i < arrayLength; i++ ) {
        resultArr.push( { value: 12 * i, label: 12 * i } )
    }

    return resultArr;

}

describe( 'SelectField', () => {
    
    it( 'should have first position from selectOptions array as value after render', async () => {
        const wrapper = renderThemeOnly( <SelectField id={ "test" } name={ "test" } selectOptions={ renderXOptions( 3 ) }/>, {} );
    
        expect( wrapper.getByTestId( "ProductsPerPageSelect" ) ).toHaveValue( "0" );
    } );

    it( 'should set correct value when onChange is fired' , async () => {
        const wrapper = renderThemeOnly( <SelectField id={ "test" } name={ "test" } selectOptions={ renderXOptions( 3 ) }/>, {} );

        fireEvent.change( wrapper.getByTestId( "ProductsPerPageSelect" ), { target: { value: renderXOptions( 3 )[1].value } } );
        expect( wrapper.getByTestId( "ProductsPerPageSelect" ) ).toHaveValue( "12" );

    } );

    it( 'should render selectedOption.length number of select options (length = 3)' , async () => {
        const wrapper = renderThemeOnly( <SelectField id={ "test" } name={ "test" } selectOptions={ renderXOptions( 3 ) }/>, {} );

        expect( wrapper.getAllByTestId( "ProductsPerPageSelect-option" ) ).toHaveLength( 3 );

    } );

    it( 'should render selectedOption.length number of select options (length = 2)' , async () => {
        const wrapper = renderThemeOnly( <SelectField id={ "test" } name={ "test" } selectOptions={ renderXOptions( 2 ) }/>, {} );

        expect( wrapper.getAllByTestId( "ProductsPerPageSelect-option" ) ).toHaveLength( 2 );

    } );

    it( 'should render selectedOption.length number of select options (length = 15)' , async () => {
        const wrapper = renderThemeOnly( <SelectField id={ "test" } name={ "test" } selectOptions={ renderXOptions( 15 ) }/>, {} );

        expect( wrapper.getAllByTestId( "ProductsPerPageSelect-option" ) ).toHaveLength( 15 );

    } );
} );