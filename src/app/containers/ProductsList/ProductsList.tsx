import { Product } from '../../components/Product/Product';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from 'store';
import { getProductsList, getSearchParams } from 'store/selectors';
import { ContentWrapper, ProductsWrapper } from "./styled";
import { Pagination } from 'app/components/Pagination';
import { ProductDetails, ProductDetailsProps } from 'app/components/ProductDetails';

interface Props {
    
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
    const [ popUpState, setPopUpState ] = useState( initialState );
    const { imgUrl, title, description, promo, isOpen } = popUpState;

    useEffect( () => {
        dispatch( fetchProducts( searchParams ) )
    }, [ searchParams ] );

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
                    onClick={ ctaButtonClickHandler }/>
            );
        } );
    };
  
    return (
        <>
            <ContentWrapper>
                <ProductsWrapper>
                    { renderProducts() }
                </ProductsWrapper>
                <Pagination />
            </ContentWrapper>
            <ProductDetails imgUrl={ imgUrl } title={ title } description={ description } isOpen={ isOpen } promo={ promo } onClose={ onCloseHandler }/>
        </>
    );
};