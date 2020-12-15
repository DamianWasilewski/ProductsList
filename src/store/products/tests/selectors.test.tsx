import { mockAuthState } from "store/auth/mocks/state.mock";
import { mockProductsState } from "../mocks/state.mock";
import { getIsLoading, getProductsList, getSearchParams } from "../selectors";

describe( 'products/selectors', () => {
    const mockedProductsState = mockProductsState();
    const mockedAuthState = mockAuthState();
    const mockedRootState = { auth: mockedAuthState, products: mockedProductsState };

    it( 'should return search params', () => {
        const expected = mockedProductsState.searchParams;
        const actual = getSearchParams( mockedRootState );
        expect( actual ).toEqual( expected );
    } );

    it( 'should return productsList', () => {
        const expected = mockedProductsState.data.items;
        const actual = getProductsList( mockedRootState );
        expect( actual ).toEqual( expected );
    } );

    it( 'should return isLoading', () => {
        const expected = mockedProductsState.isLoading;
        const actual = getIsLoading( mockedRootState );
        expect( actual ).toEqual( expected );
    } );
} );