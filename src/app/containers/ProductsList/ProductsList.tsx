import { Product } from '../../components/Product/Product';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from 'store';
import { getIsLoading, getProductsList, areProdcutsExisting, getSearchParams } from 'store/selectors';
import { ContentWrapper, ProductsWrapper } from './styled';
import { PaginationWrapper } from 'app/components/PaginationWrapper';
import { ProductDetails, ProductDetailsProps } from 'app/components/ProductDetails';
import { Spinner } from 'app/shared/Spinner';
import { NoProductsInfo } from 'app/components/NoProductsInfo';

export interface StyledLoadingContentProps {
    isLoading?: boolean;
};

const initialState: ProductDetailsProps = {
    imgUrl: "",
    title: "",
    description: "",
    promo: false,
    isOpen: false,
};

export const ProductsList = () => {
    const dispatch = useDispatch();
    const searchParams = useSelector( getSearchParams );
    const products = useSelector( getProductsList );
    const areProducts = useSelector( areProdcutsExisting );
    const isLoading = useSelector( getIsLoading );
    const [ popUpState, setPopUpState ] = useState( initialState );
    const { imgUrl, title, description, promo, isOpen } = popUpState;

    /* eslint-disable */
    useEffect( () => {
        dispatch( fetchProducts( searchParams ) )
    }, [ searchParams ] );
    /* eslint-enable */

    const ctaButtonClickHandler = ( title: string, description: string, imgUrl: string, promo: boolean ) => {
        setPopUpState( {
            imgUrl,
            title,
            description,
            promo,
            isOpen: true,
        } );
    }

    const onCloseHandler = () => {
        setPopUpState( {
            ...initialState,
        } );
    }

    const renderProducts = () => {
        return products?.map( product => {
            return ( 
                <Product
                    key={ product.name }
                    title={ product.name }
                    description={ product.description }
                    rating={ product.rating }
                    name={ product.name }
                    imageUrl={ product.image }
                    isDisabled={ !product.active }
                    promo={ product.promo }
                    onClick={ ctaButtonClickHandler } />
            );
        } );
    };

    const renderNoProductsInfo = () => <NoProductsInfo />

    const renderContent = () => products ? renderProducts() : renderNoProductsInfo();
  
    return (
        <>
            <ContentWrapper isLoading={ isLoading }>
            { !isLoading ?
                <>
                    <ProductsWrapper>
                        { renderContent() }
                    </ProductsWrapper>
                    <PaginationWrapper data-testid="Pagination-wrapper" areProducts={ areProducts }/>
                </> : <Spinner /> }
            </ContentWrapper>
            <ProductDetails imgUrl={ imgUrl } title={ title } description={ description } isOpen={ isOpen } promo={ promo } onClose={ onCloseHandler }/>
        </>
    );
};