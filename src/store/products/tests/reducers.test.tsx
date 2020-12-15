import { cleanup } from "@testing-library/react";
import { HttpMethod } from "utils/httpUtils";
import { fetchProductsSuccess, setFilters, setSearchPhrase } from "../actions";
import { mockPayload, mockProductsState } from "../mocks/state.mock";
import { productsReducer } from "../reducers";
import { productsInitState } from "../state";

afterEach( cleanup );

describe( "products/reducers", () => {
    it ( 'should return init state', () => {
        const expected = { ...productsInitState };
        const actual = productsReducer( undefined, { type: "@@INIT" } as any );
        expect( actual ).toEqual( expected );
    } );

    it( 'should return updated state (ProductsActionTypes.FETCH_PRODUCTS_SUCCESS)', async () => {
        const payload = mockPayload();
        const actual = productsReducer( productsInitState, fetchProductsSuccess( payload ) );
        const expected = mockProductsState();

        expect( actual ).toEqual( expected );
    } );

    it( 'should return updated state (ProductsActionTypes.SET_FILTERS) with promo filter key-value as action payload', async () => {
        const payload = { promo: true };
        const actual = productsReducer( productsInitState, setFilters( payload ) );
        const expected = { 
            ...mockProductsState(),
            data: {},
            searchParams: {
                ...mockProductsState().searchParams,
                promo: true,
            }
        };

        expect( actual ).toEqual( expected );
    } );

    it( 'should return updated state (ProductsActionTypes.SET_FILTERS) with active filter key-value as action payload', async () => {
        const payload = { active: true };
        const actual = productsReducer( productsInitState, setFilters( payload ) );
        const expected = { 
            ...mockProductsState(),
            data: {},
            searchParams: {
                ...mockProductsState().searchParams,
                active: true,
            }
        };

        expect( actual ).toEqual( expected );
    } );

    it( 'should return updated searchParams.promo state value (ProductsActionTypes.SET_FILTERS) with opposite value for promo filter key-value as action payload', async () => {
        const payload = { promo: false };
        
        const actual = productsReducer( {
            ...productsInitState,
            searchParams: {
                ...productsInitState.searchParams,
                promo: true,
            }
        }, setFilters( payload ) );

        const expected = { 
            ...mockProductsState(),
            data: {},
            searchParams: {
                ...mockProductsState().searchParams,
                promo: false,
            }
        };

        expect( actual ).toEqual( expected );
    } );

    it( 'should return updated searchParams.active state value (ProductsActionTypes.SET_FILTERS) with opposite value for active filter key-value as action payload', async () => {
        const payload = { active: false };

        const actual = productsReducer( {
            ...productsInitState,
            searchParams: {
                ...productsInitState.searchParams,
                active: true,
            }
        }, setFilters( payload ) );

        const expected = { 
            ...mockProductsState(),
            data: {},
            searchParams: {
                ...mockProductsState().searchParams,
                active: false,
            }
        };

        expect( actual ).toEqual( expected );
    } );

    it( 'should return and set searchParams.searchPhrase state value when it was not present in state(ProductsActionTypes.SET_SEARCH_PHRASE)', async () => {
        const payload = "test";
        const actual = productsReducer( productsInitState, setSearchPhrase( payload ) );
        const expected = { 
            ...mockProductsState(),
            data: {},
            searchParams: {
                ...mockProductsState().searchParams,
                searchPhrase: "test",
            }
        };

        expect( actual ).toEqual( expected );
    } );

    it( 'should return and set new searchParams.searchPhrase state value when it was present in state(ProductsActionTypes.SET_SEARCH_PHRASE)', async () => {
        const payload = "test1";
        const actual = productsReducer( {
            ...productsInitState,
            searchParams: {
                ...productsInitState.searchParams,
                searchPhrase: "test",
            }
        }, setSearchPhrase( payload ) );

        const expected = { 
            ...mockProductsState(),
            data: {},
            searchParams: {
                ...mockProductsState().searchParams,
                searchPhrase: "test1",
            }
        };

        expect( actual ).toEqual( expected );
    } );
} );