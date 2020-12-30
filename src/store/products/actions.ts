import { BaseAction } from '../../utils/reduxUtils';
import { FetchProductsResponse } from 'services/_fetchProducts';
import { AcceptedParamsTypes, Dictionary, ServiceResponse, ServiceResponseError } from 'utils/httpUtils';

export enum ProductsActionType {
    FETCH_PRODUCTS = "FETCH_PRODUCTS",
    FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_FAIL = "FETCH_PRODUCTS_FAIL",

    SET_PAGE_NUMBER = "SET_PAGE_NUMBER",
    SET_PRODUCTS_PER_PAGE = "SET_PRODUCTS_PER_PAGE",
    SET_FILTERS = "SET_FILTERS",
    SET_SEARCH_PHRASE = "SET_SEARCH_PHRASE",
    REMOVE_SEARCH_PHRASE = "REMOVE_SEARCH_PHRASE",
}

export type FetchProductsAction = BaseAction<ProductsActionType.FETCH_PRODUCTS, Dictionary<AcceptedParamsTypes> >;

export type FetchProductsSuccessAction = BaseAction<ProductsActionType.FETCH_PRODUCTS_SUCCESS, FetchProductsResponse>;

export type FetchProductsFailAction = BaseAction<ProductsActionType.FETCH_PRODUCTS_FAIL, ServiceResponse<ServiceResponseError>>;

export type SetPageNumberAction = BaseAction<ProductsActionType.SET_PAGE_NUMBER, number>;

export type SetProductsPerPageAction = BaseAction<ProductsActionType.SET_PRODUCTS_PER_PAGE, number>;

export type SetFiltersAction = BaseAction<ProductsActionType.SET_FILTERS, string>;

export type SetSearchPhrase = BaseAction<ProductsActionType.SET_SEARCH_PHRASE, string>;

export type RemoveSearchPhrase = BaseAction<ProductsActionType.REMOVE_SEARCH_PHRASE>;

export function fetchProducts( params: Dictionary<AcceptedParamsTypes>  ) {
    return {
        type: ProductsActionType.FETCH_PRODUCTS,
        payload: params
    };
};

export function fetchProductsSuccess( data: FetchProductsResponse ) {
    return {
        type: ProductsActionType.FETCH_PRODUCTS_SUCCESS,
        payload: data
    };
};

export function fetchProductsFail( error: any ) {
    return {
        type: ProductsActionType.FETCH_PRODUCTS_FAIL,
        payload: error
    };
};

export function setPageNumber( pageNumber: number ) {
    return {
        type: ProductsActionType.SET_PAGE_NUMBER,
        payload: pageNumber
    };
};

export function setProductsPerPage( productsPerPage: number ) {
    return {
        type: ProductsActionType.SET_PRODUCTS_PER_PAGE,
        payload: productsPerPage
    };
};

export function setFilters( filters: any ) {
    return {
        type: ProductsActionType.SET_FILTERS,
        payload: filters
    };
};

export function setSearchPhrase( searchPhrase: string ) {
    return {
        type: ProductsActionType.SET_SEARCH_PHRASE,
        payload: searchPhrase
    };
};

export function removeSearchPhrase() {
    return {
        type: ProductsActionType.REMOVE_SEARCH_PHRASE,
    };
};