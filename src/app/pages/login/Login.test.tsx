import React from 'react';
import { renderAll } from 'utils/testUtils';

import { Login } from './Login';

describe('Login', () => {
  test('Displays all information', async () => {
    const { getByLabelText } = renderAll( <Login />, {} );

    expect(getByLabelText('username')).toBeInTheDocument();
    expect(getByLabelText('password')).toBeInTheDocument();
  });
});
