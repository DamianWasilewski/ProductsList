import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import { fetchProducts, login } from 'store';
import { getProductsList, getSearchParams } from 'store/selectors';

interface Props {

}

export const Products = () => {
  const dispatch = useDispatch();
  const searchParams = useSelector( getSearchParams );
  const products = useSelector( getProductsList )

  useEffect( () => {
      dispatch( fetchProducts( searchParams ) )
  }, [ searchParams ]);

  return (
    <>
      <h2>Products page</h2>
      <Link to={AppRoute.login}> Login </Link>
      <button onClick={ () => console.log( products ) }>test</button>
    </>
  );
};
