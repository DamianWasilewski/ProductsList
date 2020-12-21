import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageNumber } from 'store';
import { getCurrentPage, getTotalPages } from 'store/selectors';
import { ContentWrapper } from "./styled";

export const Pagination = () => {
    const currentPage = useSelector(getCurrentPage);
    const pageCount = useSelector(getTotalPages);
    const dispatch = useDispatch();

    const getPaginationRangeValues = () => {
        const numGroup = 3;
        const focusNumGroup = 7;
        const paginationValues = [];
        for(let p = 1 ; p <= pageCount ; p++) {
            if ( p === numGroup && currentPage - 1 > focusNumGroup - 1) {
                paginationValues.push( "..." );
                p = currentPage - 3;
            }
            if ( p === (currentPage + numGroup) && pageCount - currentPage > focusNumGroup){
                paginationValues.push( "..." );
                p = pageCount - numGroup + 1;
            }

            paginationValues.push( p );
        }

        return paginationValues;
    };

    const onClickHandler = ( event: React.MouseEvent<HTMLButtonElement> ) => {
        event.preventDefault();
        dispatch( setPageNumber( parseInt( event.currentTarget.value, 0 ) ) )
    }

    const renderPagination = () => {
        return getPaginationRangeValues().map( rangeValue => {
            return <button key={ rangeValue } onClick={ onClickHandler } value={ rangeValue }>{ rangeValue }</button>
        } )
    }

    return <ContentWrapper> { renderPagination() } </ContentWrapper>;
};