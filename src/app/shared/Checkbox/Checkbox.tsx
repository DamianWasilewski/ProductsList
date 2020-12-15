import React from 'react';

interface Props {
  readonly label: string;
  readonly name?: string;
  readonly onChange?: ( event: React.ChangeEvent<HTMLInputElement> ) => void;
}

export interface SelectOptions {
  value?: number | string;
  label?: number | string;
}

export const Checkbox = ( { label, name, onChange }: Props ) => {
    const inputName = name ? name : label;

    return (
        <div>
            <input type="checkbox" name={ inputName } id={ label } value={ label } onChange={ onChange }/>
            <label htmlFor={ label }>{ label }</label>
        </div>
    );
};