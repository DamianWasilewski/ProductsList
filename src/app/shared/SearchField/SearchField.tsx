import React from 'react';

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
        <div>
            <label htmlFor={ label }>{ label }</label>
            <input data-testid="searchField" type="text" name={ inputName } id={ label } value={ value } onChange={ onChange }/>
            <button onClick={ onClick } >SEARCH</button>
        </div>
    );
};