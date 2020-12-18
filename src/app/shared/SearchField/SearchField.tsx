import React from 'react';
import { SearchFieldWrapper } from './styled';
import { ReactComponent as SearchIconSvg } from "../../../assets/images/searchIcon.svg";

interface Props {
    readonly label: string;
    readonly name?: string;
    readonly value?: string;
    readonly onChange?: ( event: React.ChangeEvent<HTMLInputElement> ) => void;
    readonly onClick?: () => void;
}

export const SearchField = ( { label, name, value, onChange, onClick }: Props ) => {
    const inputName = name ? name : label;

    return (
        <>
            <SearchFieldWrapper>
                <label htmlFor={ label }>{ label }</label>
                <input data-testid="searchField" type="text" placeholder={ "Search" } name={ inputName } id={ label } value={ value } onChange={ onChange }/>
                <button onClick={ onClick }><SearchIconSvg /></button>
            </SearchFieldWrapper>
        </>
    );
};