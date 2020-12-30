import { Checkbox } from 'app/shared/Checkbox';
import { Logo } from 'app/shared/Logo';
import { SearchField } from 'app/components/SearchField';
import config from 'config';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeSearchPhrase, setFilters, setSearchPhrase as setReduxSearchPhrase } from 'store';
import { LoginButton } from '../LoginButton';
import { CheckboxesWrapper, FiltersWrapper, StyledHeader } from './styled';


interface Props {
    areFiltersVisible?: boolean;
    isLoginInfoVisible?: boolean;
}

export const Header = ( { areFiltersVisible = true, isLoginInfoVisible = true }: Props ) => {
    const dispatch = useDispatch();
    const [ searchPhrase, setSearchPhrase ] = useState( "" );
  
    const onCheckboxChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
      dispatch( setFilters( { [event.target.name]: event.target.checked } ) )
    };

    const onNoValueAfterInputClear = () => {
      setSearchPhrase( "" );
      
      return dispatch( removeSearchPhrase() );
    };
  
    const onSearchInputChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
      return event.target.value ? setSearchPhrase( event.target.value ) : onNoValueAfterInputClear();
    };
  
    const onSearchClickHandler = () => {
      dispatch( setReduxSearchPhrase( searchPhrase ) );
    };
  
    const renderCheckboxes = () => {
      return config.checkboxFilters.map( filter => {
        return <Checkbox key={ filter } label={ filter } onChange={ onCheckboxChange } />
      } );
    };

    return (
        <StyledHeader>
            <Logo />
            { isLoginInfoVisible ? <LoginButton /> : <div>{ "" }</div> }
            { areFiltersVisible ?
              <FiltersWrapper>
                  <SearchField label={ "searchField" } onChange={ onSearchInputChange } value={ searchPhrase } onClick={ onSearchClickHandler } />
                  <CheckboxesWrapper>    
                    { renderCheckboxes() }
                  </CheckboxesWrapper>  
              </FiltersWrapper> : null }
        </StyledHeader>
    );
};