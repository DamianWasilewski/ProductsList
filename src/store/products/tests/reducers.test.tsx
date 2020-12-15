import { cleanup } from "@testing-library/react";
import { HttpMethod } from "utils/httpUtils";
import { fetchProductsSuccess } from "../actions";
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
} );