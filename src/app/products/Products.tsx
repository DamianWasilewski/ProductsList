import { Checkbox } from 'app/shared/Checkbox';
import { SearchField } from 'app/shared/SearchField';
import { SelectField } from 'app/shared/SelectField';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import { fetchProducts, setFilters, setProductsPerPage, setSearchPhrase as setReduxSearchPhrase } from 'store';
import { getProductsList, getSearchParams } from 'store/selectors';
import config from "../../config";

interface Props {

}

export const Products = () => {
  const dispatch = useDispatch();
  const searchParams = useSelector( getSearchParams );
  const products = useSelector( getProductsList );
  const [ searchPhrase, setSearchPhrase ] = useState( "" );

  useEffect( () => {
      dispatch( fetchProducts( searchParams ) )
  }, [ searchParams ]);

  const onProductsLimitPerPageChange = ( event: React.ChangeEvent<HTMLSelectElement> ) => {
    dispatch( setProductsPerPage( parseInt( event.target.value, 0 ) ) )
  }

  const onCheckboxChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    dispatch( setFilters( { [event.target.name]: event.target.checked } ) )
  }

  const onSearchInputChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    setSearchPhrase( event.target.value );
  }

  const onSearchClickHandler = () => {
    dispatch( setReduxSearchPhrase( searchPhrase ) );
  }

  const renderCheckboxes = () => {
    return config.checkboxFilters.map( filter => {
      return <Checkbox key={ filter } label={ filter } onChange={ onCheckboxChange } />
    })
  }
 
  return (
    <>
      <h2>Products page</h2>
      <Link to={AppRoute.login}> Login </Link>
      <SelectField selectOptions={ config.productsPerPageOptions } id={ "LimitsPerPage" } name={ "LimitPerPageSelect" } onChange={ onProductsLimitPerPageChange } />
      { renderCheckboxes() }
      <SearchField label={ "searchField" } onChange={ onSearchInputChange } value={ searchPhrase } onClick={ onSearchClickHandler } />
      <button onClick={ () => console.log( searchPhrase ) }>test</button>
    </>
  );
};
