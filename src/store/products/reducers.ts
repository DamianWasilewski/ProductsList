import { FetchProductsAction, FetchProductsFailAction, FetchProductsSuccessAction, ProductsActions, ProductsActionType, SetPageNumberAction } from "./actions";
import { ProductsState, productsInitState } from "./state";

function fetchProducts( state: ProductsState, action: FetchProductsAction ) {
    return {
        ...state,
        isLoading: true,
        error: false,
    }
}

function fetchProductsSuccess( state: ProductsState, action: FetchProductsSuccessAction ) {
    return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        error: false,
    }
}

function fetchProductsFail( state: ProductsState, action: FetchProductsFailAction ) {
    return {
        ...state,
        data: [],
        isLoading: false,
        error: true,
    }
}

function setPageNumber( state: ProductsState, action: SetPageNumberAction ) {
    return {
        ...state,
        pageNumber: action.payload
    }
}

export const productsReducer = ( state: ProductsState = productsInitState, action: ProductsActions ) => {
    switch ( action.type ) {
        case ProductsActionType.FETCH_PRODUCTS:
            return {
                ...state,
            };
        case ProductsActionType.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                isLoading: false,
                error: false,
            };
        case ProductsActionType.FETCH_PRODUCTS_FAIL:
            return {
                ...state,
                data: [],
                isLoading: false,
                error: true,
            }
        case ProductsActionType.SET_PAGE_NUMBER:
            return {
                ...state,
                pageNumber: action.payload
            }
        
        default:
            return state;
    }
}



