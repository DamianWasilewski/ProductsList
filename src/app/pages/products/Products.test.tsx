import React from 'react';
import { fireEvent } from 'tests';
import { Products } from './Products';
import config from 'config';
import { renderAll } from 'utils/testUtils';

describe('Products', () => {
  it( 'should render n number of checkbox filter based on config array length', () => {
    const wrapper = renderAll( <Products />, {} );

    expect( wrapper.getAllByTestId( "filterCheckbox" ) ).toHaveLength( config.checkboxFilters.length );
  })

  it( 'should update component state searchPhrase property on changing input value', () => {
    const wrapper = renderAll( <Products />, {} );

    const input = wrapper.getByTestId( "searchField" );
    fireEvent.change( input, { target: { value: '1234567' } } )
    
    expect( input ).toHaveAttribute( "value", "1234567" );
  } );
});
