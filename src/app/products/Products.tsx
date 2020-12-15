import { SelectField } from 'app/shared/SelectField';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import { fetchProducts, setProductsPerPage } from 'store';
import { getProductsList, getSearchParams } from 'store/selectors';

interface Props {

}

export const Products = () => {
  const dispatch = useDispatch();
  const searchParams = useSelector( getSearchParams );
  const products = useSelector( getProductsList );

  const selectOptions = [
    { value: 12, label: 12 },
    { value: 24, label: 24 },
    { value: 36, label: 36 },
  ];

  useEffect( () => {
      dispatch( fetchProducts( searchParams ) )
  }, [ searchParams ]);

  const onChange = ( event: React.ChangeEvent<HTMLSelectElement> ) => {
    dispatch( setProductsPerPage( parseInt( event.target.value, 0 ) ) )
  }
 
  return (
    <>
      <h2>Products page</h2>
      <Link to={AppRoute.login}> Login </Link>
      <SelectField selectOptions={ selectOptions } id={ "LimitsPerPage" } name={ "LimitPerPageSelect" } onChange={ onChange }/>
      <button onClick={ () => console.log( products ) }>test</button>
    </>
  );
};
