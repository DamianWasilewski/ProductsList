import { Checkbox } from 'app/shared/Checkbox';
import { SelectField } from 'app/shared/SelectField';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import { fetchProducts, setFilters, setProductsPerPage } from 'store';
import { getProductsList, getSearchParams } from 'store/selectors';
import { Dictionary } from 'utils/httpUtils';

interface Props {

}

interface Filters {
  promo: boolean;
  active: boolean;
}

const initialFilters = {
  promo: false,
  active: false
}

export const Products = () => {
  const dispatch = useDispatch();
  const searchParams = useSelector( getSearchParams );
  const products = useSelector( getProductsList );
  // const [ filters, setFilters ] = useState( initialFilters );

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
    // setFilters( {...filters, [event.target.name]: event.target.checked } );
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
