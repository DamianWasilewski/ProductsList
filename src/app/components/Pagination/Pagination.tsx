import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageNumber } from 'store';
import { getCurrentPage, getTotalPages } from 'store/selectors';
import { ContentWrapper, PaginationButton } from "./styled";

export interface PaginationButtonProps {
    hasSameValueAsCurrentPage: boolean;
    isDisabled?: boolean;
}

interface PaginationButtonParams {
    label: string | number;
    value: number;
}

export enum OuterPaginationButtons {
    FIRST = 'First',
    LAST = 'Last',
}

export const Pagination = () => {
    const currentPage = useSelector(getCurrentPage);
    const pageCount = useSelector(getTotalPages);
    const dispatch = useDispatch();

    const getPaginationRangeValues = (): PaginationButtonParams[] => {
        const numGroup = 3;
        const valuesInTheMiddle = 7;
        const paginationValues = [];
        for( let p = 1 ; p <= pageCount ; p++ ) {
            if ( p === numGroup && currentPage - 1 > valuesInTheMiddle - 1 ) {
                paginationValues.push( { label: "...", value: 0 } );
                p = currentPage - 3;
            }
            if ( p === ( currentPage + numGroup ) && pageCount - currentPage > valuesInTheMiddle ){
                paginationValues.push( { label: "...", value: 0 } );
                p = pageCount - numGroup + 1;
            }

            paginationValues.push( { label: p, value: p } );
        }
        paginationValues.unshift( { label: OuterPaginationButtons.FIRST, value: 1 } );
        paginationValues.push( { label: OuterPaginationButtons.LAST, value: pageCount } );

        return paginationValues;
    };

    const onClickHandler = ( event: React.MouseEvent<HTMLButtonElement> ) => {
        // Temp solution to not have error thrown on ... button click
        event.preventDefault();
        if ( event.currentTarget.value !== '0' ) {
          dispatch( setPageNumber( parseInt( event.currentTarget.value, 0 ) ) );  
        }
    };
    
    const hasSameValueAsCurrentPageCheck = ( value: string | number ) => {
        return currentPage === value;
    };

    const isButtonDisabled = ( buttonData: PaginationButtonParams ) => {
        return ( buttonData.label === OuterPaginationButtons.FIRST || buttonData.label === OuterPaginationButtons.LAST ) && buttonData.value === currentPage;
    };

    const renderPagination = () => {
        return getPaginationRangeValues().map( ( rangeValue, i ) => {
            const [ label, value ] = Object.values( rangeValue );

            return (
                <PaginationButton
                    data-cy="pagination-button"
                    key={ i }
                    disabled={ isButtonDisabled( rangeValue ) }
                    onClick={ onClickHandler }
                    value={ value }
                    hasSameValueAsCurrentPage={ hasSameValueAsCurrentPageCheck( value! ) }>{ label }</PaginationButton>
            );
        } );
    };

    return <ContentWrapper>{ renderPagination() }</ContentWrapper>;
};