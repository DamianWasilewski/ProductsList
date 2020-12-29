import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getSearchParams } from 'store/selectors';
import { ContentWrapper } from './styled';

interface Props {
  readonly selectOptions: Array<number | string | SelectOptions>;
  readonly id: string;
  readonly name: string;
  readonly onChange?: ( event: React.ChangeEvent<HTMLSelectElement> ) => void;
  readonly onBlur?: () => void;
}

export interface SelectOptions {
  value: number | string;
  label: number | string;
}

function renderSingleOption( optionValues: Array<number | string> ) {
  const [ value, label ] = optionValues;
  
  return <option data-testid="ProductsPerPageSelect-option" key={ value } value={ value }>{ label }</option>;
};

function renderOptions( options: Array<number | string | SelectOptions> ): JSX.Element {
  const optionElements = options.map( ( option ) => {
      const optionsToRender = Object.values( option );
      return renderSingleOption( optionsToRender );
  } );
  return <>{ optionElements }</>;
};

export const SelectField = ( { selectOptions, id, name, onChange, onBlur }: Props ) => {
  const searchParams = useSelector( getSearchParams );

  // eslint-disable-next-line
  const [ productsPerPage, setProductsPerPage ] = useState( searchParams.limit );
  
  const selectField: JSX.Element = (
      <ContentWrapper>
        <label htmlFor={ id }>{ "Items per page" }</label>
        <select data-testid="ProductsPerPageSelect" value={ productsPerPage as number | string } id={ id } name={ name } onChange={ onChange } onBlur={ onBlur }>
            { renderOptions( selectOptions ) }
        </select>
      </ContentWrapper>
  );

  return selectField;
};