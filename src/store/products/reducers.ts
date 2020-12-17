import { ProductsActionType } from "./actions";
import { ProductsState, productsInitState } from "./state";

export const productsReducer = ( state: ProductsState = productsInitState, action: any ): ProductsState => {
    const { searchParams } = state;
    switch ( action.type ) {
        case ProductsActionType.FETCH_PRODUCTS:
            return {
                ...state,
                isLoading: true,
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
                    ...searchParams,
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
        case ProductsActionType.SET_FILTERS:
            const [ name, isChecked ] = Object.entries( action.payload )[0];

            return {
                ...state,
                searchParams: {
                    ...searchParams,
                    [name as any]: isChecked, 
                }
            }
        case ProductsActionType.SET_SEARCH_PHRASE:

            return {
                ...state,
                searchParams: {
                    ...searchParams,
                    searchPhrase: action.payload
                }
            }

        case ProductsActionType.REMOVE_SEARCH_PHRASE:

            return {
                ...state,
                searchParams: {
                    ...searchParams,
                    searchPhrase: "",
                }
            }

        default:
            return state;
    }
}



