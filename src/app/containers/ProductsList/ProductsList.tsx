import { Product } from '../../components/Product/Product';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from 'store';
import { getProductsList, getSearchParams } from 'store/selectors';
import { ContentWrapper, ProductsWrapper } from "./styled";
import { Pagination } from 'app/components/Pagination';

interface Props {
    
};

export const ProductsList = () => {
    const dispatch = useDispatch();
    const searchParams = useSelector( getSearchParams );
    const products = useSelector( getProductsList );

    useEffect( () => {
        dispatch( fetchProducts( searchParams ) )
    }, [ searchParams ]);

    const renderProducts = () => {
        return products?.map( product => {
            return ( 
                <Product key={ product.name }
                    title={ product.name }
                    description={ product.description }
                    rating={ product.rating }
                    name={ product.name }
                    imageUrl={ product.image } />
            );
        } );
    };
  
    return (
        <ContentWrapper>
            <ProductsWrapper>
                { renderProducts() }
            </ProductsWrapper>
            <Pagination />
        </ContentWrapper>
    );
};