import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';

import { render } from 'tests';

import { Products } from './Products';
import config from "../../config";

describe('Products', () => {
  test('Displays page header', async () => {
    const { getByText } = render(<Provider store={ store }><Products /></Provider>);

    expect(getByText('Products page')).toBeInTheDocument();
  });

  it( 'should render n number of checkbox filter based on config array length', () => {
    const wrapper = render(<Provider store={ store }><Products /></Provider>);

    expect( wrapper.getAllByTestId( "filterCheckbox" ) ).toHaveLength( config.checkboxFilters.length );
  })
});
