import { SelectField } from 'app/shared/SelectField';
import config from 'config';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setProductsPerPage } from 'store';
import { Pagination } from '../Pagination/Pagination';
import { ContentWrapper } from "./styled";

export const PaginationWrapper = () => {
    const dispatch = useDispatch();

    const onProductsLimitPerPageChange = ( event: React.ChangeEvent<HTMLSelectElement> ) => {
        dispatch( setProductsPerPage( parseInt( event.target.value, 0 ) ) )
    }

    return (
        <ContentWrapper>
            <SelectField selectOptions={ config.productsPerPageOptions } id={ "LimitsPerPage" } name={ "LimitPerPageSelect" } onChange={ onProductsLimitPerPageChange } />
            <Pagination />
        </ContentWrapper>
    );
};