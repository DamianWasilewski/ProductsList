import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';

import { render } from 'tests';

import { Products } from './Products';

describe('Products', () => {
  test('Displays page header', async () => {
    const { getByText } = render(<Provider store={ store }><Products /></Provider>);

    expect(getByText('Products page')).toBeInTheDocument();
  });
});
