import { Checkbox } from 'app/shared/Checkbox';
import { SelectField } from 'app/shared/SelectField';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import { fetchProducts, setFilters, setProductsPerPage } from 'store';
import { getProductsList, getSearchParams } from 'store/selectors';

interface Props {

}

export const Products = () => {
  const dispatch = useDispatch();
  const searchParams = useSelector( getSearchParams );
  const products = useSelector( getProductsList );
  // TODO: Make a new variable in config that will store array of checkbox filter in order to map them dynamically
  // TODO: Move selectOptions to config file later on
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

  const onCheckboxChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    dispatch( setFilters( { [event.target.name]: event.target.checked } ) )
  }
 
  return (
    <>
      <h2>Products page</h2>
      <Link to={AppRoute.login}> Login </Link>
      <SelectField selectOptions={ selectOptions } id={ "LimitsPerPage" } name={ "LimitPerPageSelect" } onChange={ onChange } />
      <Checkbox label={ 'promo' } onChange={ onCheckboxChange } />
      <Checkbox label={ 'active' } onChange={ onCheckboxChange } />
      <button onClick={ () => console.log( products ) }>test</button>
    </>
  );
};
