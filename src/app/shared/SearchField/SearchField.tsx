import React from 'react';
import { SearchButton, SearchFieldWrapper } from './styled';
import { ReactComponent as SearchIconSvg } from "../../../assets/images/searchIcon.svg";
import { TextField } from '../TextField';
import { DefaultInputProps } from '../types';

interface Props extends DefaultInputProps {
    readonly onClick?: () => void;
}

export const SearchField = ( { label, name, value, onChange, onClick }: Props ) => {

    return (
            <SearchFieldWrapper>
                <TextField 
                    label={ label }
                    name={ name }
                    placeholder={ "Search" }
                    value={ value }
                    isLabelVisible={ false }
                    onChange={ onChange }
                    testId={ "searchField" } />
                <SearchButton data-testid="search-button" onClick={ onClick }><SearchIconSvg /></SearchButton>
            </SearchFieldWrapper>
    );
};