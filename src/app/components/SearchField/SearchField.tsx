import React, { useCallback, useEffect } from 'react';
import { SearchButton, SearchFieldWrapper } from './styled';
import { ReactComponent as SearchIconSvg } from "../../../assets/images/searchIcon.svg";
import { TextField } from '../../shared/TextField';
import { DefaultInputProps } from '../../shared/types';

interface Props extends DefaultInputProps {
    readonly onClick?: () => void;
}

export const SearchField = ( { label, name, value, onChange, onClick }: Props ) => {

    /* eslint-disable */
    const handleKeyUp = useCallback(
        event => {
            if ( event.code === "Enter" && value ) {
                event.stopPropagation();
                if ( onClick ) {
                    onClick();
                }
            }
        }, [ onClick ] );
    /* eslint-enable */

    useEffect( () => {
        window.addEventListener( "keyup", handleKeyUp );

        return () => {
            window.removeEventListener( "keyup", handleKeyUp );
        };
    }, [ handleKeyUp ] );

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