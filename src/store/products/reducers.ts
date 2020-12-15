import { ProductsActionType } from "./actions";
import { ProductsState, productsInitState } from "./state";

export const productsReducer = ( state: ProductsState = productsInitState, action: any ): ProductsState => {
    const { searchParams } = state;
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
                data: {},
                isLoading: false,
                error: true,
            }
        case ProductsActionType.SET_PAGE_NUMBER:
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    page: action.payload
                }
                
            }
        case ProductsActionType.SET_PRODUCTS_PER_PAGE:
            return {
                ...state,
                searchParams: {
                    ...searchParams,
                    limit: action.payload
                }
            }
        case ProductsActionType.SET_ACTIVE_FILTER:
            return {
                ...state,
                searchParams: {
                    ...searchParams,
                    active: action.payload
                }
            }
        case ProductsActionType.SET_PROMO_FILTER:
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    active: action.payload
                }
            }

        default:
            return state;
    }
}



