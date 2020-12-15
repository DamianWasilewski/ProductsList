import { ProductsActionType, setPageNumber } from "../actions";

describe( 'products/actions', () => {
    it( 'should create an action to change current page number', () => {
        const expectedAction = {
            type: ProductsActionType.SET_PAGE_NUMBER,
            payload: 5,
        }
        expect( setPageNumber( 5 ) ).toEqual( expectedAction );
    } );
    it( 'should create an action to change current products per page', () => {
        const expectedAction = {
            type: ProductsActionType.SET_PAGE_NUMBER,
            payload: 12,
        }
        expect( setPageNumber( 12 ) ).toEqual( expectedAction );
    } );
} );