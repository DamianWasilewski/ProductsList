import React from 'react';

interface Props {
  readonly selectOptions: Array<number | string | SelectOptions>;
  readonly id: string;
  readonly name: string;
  readonly onChange?: ( event: React.ChangeEvent<HTMLSelectElement> ) => void;
  readonly onBlur?: () => void;
}

export interface SelectOptions {
  value?: number | string;
  label?: number | string;
}

function renderSingleOption( optionValues: Array<number | string> ) {
  const [ value, label ] = optionValues;
  return <option key={ value } value={ value }>{ label }</option>;
};

function renderOptions( options: Array<number | string | SelectOptions> ): JSX.Element {
  const optionElements = options.map( ( option ) => {
      const optionsToRender = Object.values( option );
      return renderSingleOption( optionsToRender );
  } );
  return <>{ optionElements }</>;
};

export const SelectField = ( { selectOptions, id, name, onChange, onBlur }: Props ) => {
  
  const selectField: JSX.Element = (
      <select data-testid="ProductsPerPageSelect" id={ id } name={ name } onChange={ onChange } onBlur={ onBlur }>
          { renderOptions( selectOptions ) }
      </select>
  );

  return selectField;
};