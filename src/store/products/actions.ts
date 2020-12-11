import { BaseAction } from '../../utils/reduxUtils';
import { FetchProductsResponse } from 'services/_fetchProducts';
import { ServiceResponse, ServiceResponseError } from 'utils/httpUtils';

export enum ProductsActionType {
    FETCH_PRODUCTS = "FETCH_PRODUCTS",
    FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_FAIL = "FETCH_PRODUCTS_FAIL",

    SET_PAGE_NUMBER = "SET_PAGE_NUMBER",
}

export type FetchProductsAction = BaseAction<ProductsActionType.FETCH_PRODUCTS>;

export type FetchProductsSuccessAction = BaseAction<ProductsActionType.FETCH_PRODUCTS_SUCCESS, FetchProductsResponse>;

export type FetchProductsFailAction = BaseAction<ProductsActionType.FETCH_PRODUCTS_FAIL, ServiceResponse<ServiceResponseError>>;

export type SetPageNumberAction = BaseAction<ProductsActionType.SET_PAGE_NUMBER, number>;

export function fetchProducts() {
    return {
        type: ProductsActionType.FETCH_PRODUCTS
    };
}

export function fetchProductsSuccess( data: FetchProductsResponse ) {
    return {
        type: ProductsActionType.FETCH_PRODUCTS_SUCCESS,
        payload: data
    };
}

export function fetchProductsFail( error: any ) {
    return {
        type: ProductsActionType.FETCH_PRODUCTS_FAIL,
        payload: error
    }
}

export function setPageNumber( number: any ) {
    return {
        type: ProductsActionType.SET_PAGE_NUMBER,
        payload: number
    }
}

export type ProductsActions = FetchProductsAction
    | FetchProductsSuccessAction
    | FetchProductsFailAction
    | SetPageNumberAction
