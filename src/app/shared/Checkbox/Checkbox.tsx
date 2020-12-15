import React from 'react';

interface Props {
  readonly label: string;
  readonly name?: string;
  readonly onChange?: ( event: React.ChangeEvent<HTMLInputElement> ) => void;
}

export const Checkbox = ( { label, name, onChange }: Props ) => {
    const inputName = name ? name : label;

    return (
        <div>
            <input data-testid="filterCheckbox" type="checkbox" name={ inputName } id={ label } value={ label } onChange={ onChange }/>
            <label htmlFor={ label }>{ label }</label>
        </div>
    );
};