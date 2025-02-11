import { createSelector } from "reselect";
import { ProductsState, RootState } from "store";
import { AcceptedParamsTypes, Dictionary } from "utils/httpUtils";
import { ProductsItem } from "./state";

export const getProductsState = ( rootState: RootState ): ProductsState => rootState.products;

export const getSearchParams = createSelector<RootState, ProductsState, Dictionary<AcceptedParamsTypes>>(
    getProductsState,
    productsState => productsState.searchParams
);

export const areSearchParamsPresent = createSelector<RootState, Dictionary<AcceptedParamsTypes>, boolean>(
    getSearchParams,
    searchParams => Object.keys( searchParams ).length === 0 ? false : true
);

export const getProductsList = createSelector<RootState, ProductsState, Array<ProductsItem> | undefined>(
    getProductsState,
    productsState => productsState.data.items
);

export const getIsLoading = createSelector<RootState, ProductsState, boolean>(
    getProductsState,
    productsState => productsState.isLoading
);

export const getCurrentPage = createSelector<RootState, ProductsState, number>(
    getProductsState,
    productsState => parseInt(productsState.data.meta?.currentPage!, 0)
);

export const getTotalPages = createSelector<RootState, ProductsState, number>(
    getProductsState,
    productsState => productsState.data.meta?.totalPages!
);

export const areProdcutsExisting = createSelector<RootState, ProductsState, boolean>(
    getProductsState,
    productsState => productsState.data.items?.length! > 0
);