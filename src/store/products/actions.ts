import { BaseAction } from '../../utils/reduxUtils';
import { FetchProductsResponse } from 'services/_fetchProducts';
import { AcceptedParamsTypes, Dictionary, ServiceResponse, ServiceResponseError } from 'utils/httpUtils';

export enum ProductsActionType {
    FETCH_PRODUCTS = "FETCH_PRODUCTS",
    FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_FAIL = "FETCH_PRODUCTS_FAIL",

    SET_PAGE_NUMBER = "SET_PAGE_NUMBER",
    SET_PRODUCTS_PER_PAGE = "SET_PRODUCTS_PER_PAGE",
    SET_ACTIVE_FILTER = "SET_ACTIVE_FILTER",
    SET_PROMO_FILTER = "SET_PROMO_FILTER", 
}

export type FetchProductsAction = BaseAction<ProductsActionType.FETCH_PRODUCTS, Dictionary<AcceptedParamsTypes> >;

export type FetchProductsSuccessAction = BaseAction<ProductsActionType.FETCH_PRODUCTS_SUCCESS, FetchProductsResponse>;

export type FetchProductsFailAction = BaseAction<ProductsActionType.FETCH_PRODUCTS_FAIL, ServiceResponse<ServiceResponseError>>;

export type SetPageNumberAction = BaseAction<ProductsActionType.SET_PAGE_NUMBER, number>;

export type SetProductsPerPageAction = BaseAction<ProductsActionType.SET_PRODUCTS_PER_PAGE, number>;

export type SetActiveFilterAction = BaseAction<ProductsActionType.SET_ACTIVE_FILTER, boolean>;

export type SetPromoFilterAction = BaseAction<ProductsActionType.SET_PROMO_FILTER, boolean>;

export function fetchProducts( params: Dictionary<AcceptedParamsTypes>  ) {
    return {
        type: ProductsActionType.FETCH_PRODUCTS,
        payload: params
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

export function setPageNumber( pageNumber: number ) {
    return {
        type: ProductsActionType.SET_PAGE_NUMBER,
        payload: pageNumber
    }
}

export function setProductsPerPage( productsPerPage: number ) {
    return {
        type: ProductsActionType.SET_PRODUCTS_PER_PAGE,
        payload: productsPerPage
    }
}

export function setActiveFilter( active: boolean ) {
    return {
        type: ProductsActionType.SET_ACTIVE_FILTER,
        payload: active
    }
}

export function setPromoFilter( promo: boolean ) {
    return {
        type: ProductsActionType.SET_PROMO_FILTER,
        payload: promo
    }
}

export type ProductsActions = FetchProductsAction
    | FetchProductsSuccessAction
    | FetchProductsFailAction
    | SetPageNumberAction
    | SetProductsPerPageAction
    | SetActiveFilterAction
    | SetPromoFilterAction
