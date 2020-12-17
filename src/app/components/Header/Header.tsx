import { Checkbox } from 'app/shared/Checkbox';
import { Logo } from 'app/shared/Logo';
import { SearchField } from 'app/shared/SearchField';
import config from 'config';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeSearchPhrase, setFilters, setSearchPhrase as setReduxSearchPhrase } from 'store';
import { FiltersWrapper, StyledHeader } from './styled';


interface Props {
    areFiltersVisible?: boolean;
}

export const Header = ( { areFiltersVisible = true }: Props ) => {

    const dispatch = useDispatch();
    const [ searchPhrase, setSearchPhrase ] = useState( "" );
    console.log( searchPhrase );
  
    const onCheckboxChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
      dispatch( setFilters( { [event.target.name]: event.target.checked } ) )
    }

    const onNoValueAfterInputClear = () => {
      setSearchPhrase( "" );
      
      return dispatch( removeSearchPhrase() );
    }
  
    const onSearchInputChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
      return event.target.value ? setSearchPhrase( event.target.value ) : onNoValueAfterInputClear();
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
        <StyledHeader>
            <Logo />
          { areFiltersVisible ?
            <FiltersWrapper>
                <SearchField label={ "searchField" } onChange={ onSearchInputChange } value={ searchPhrase } onClick={ onSearchClickHandler } />
                { renderCheckboxes() }
            </FiltersWrapper> : null }
        </StyledHeader>
    );
};