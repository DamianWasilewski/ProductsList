import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { fetchProducts, setPageNumber } from 'store';

interface Props {

}

export const Products = () => {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( fetchProducts() );
    dispatch( setPageNumber( 5 ) );
  }, []);

  return (
    <>
      <h2>Products page</h2>
      <Link to={AppRoute.login}> Login </Link>
    </>
  );
};
