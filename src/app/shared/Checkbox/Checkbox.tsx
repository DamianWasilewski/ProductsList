import React from 'react';
import { StyledCheckboxInput, Wrapper } from "./styled";

interface Props {
    readonly label: string;
    readonly name?: string;
    readonly onChange?: ( event: React.ChangeEvent<HTMLInputElement> ) => void;
}

export interface StyledCheckboxProps {
    imageSrc?: string;
}

export const Checkbox = ( { label, name, onChange }: Props ) => {
    const inputName = name ? name : label;

    return (
        <Wrapper>
            <StyledCheckboxInput imageSrc={ "../../../assets/images/crossIcon.svg" } data-testid="filterCheckbox" type="checkbox" name={ inputName } id={ label } value={ label } onChange={ onChange }/>
            <label htmlFor={ label }>{ label }</label>
        </Wrapper>
    );
};