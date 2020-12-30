import { ProductsActionType, setFilters, setPageNumber, setSearchPhrase } from "../actions";

describe( 'products/actions', () => {
    it( 'should create an action to change current page number', () => {
        const expectedAction = {
            type: ProductsActionType.SET_PAGE_NUMBER,
            payload: 5,
        }
        expect( setPageNumber( 5 ) ).toEqual( expectedAction );
    } );

    it( 'should create an action to change current productsPerPage', () => {
        const expectedAction = {
            type: ProductsActionType.SET_PAGE_NUMBER,
            payload: 12,
        }
        expect( setPageNumber( 12 ) ).toEqual( expectedAction );
    } );

    it( 'should create and action to apply new filter to searchParams with promo filter key-value as parameter', () => {
        const expectedAction = {
            type: ProductsActionType.SET_FILTERS,
            payload: { promo: true },
        }
        expect( setFilters( { promo: true } ) ).toEqual( expectedAction );
    } );

    it( 'should create and action to apply new filter to searchParams with active filter key-value as parameter', () => {
        const expectedAction = {
            type: ProductsActionType.SET_FILTERS,
            payload: { active: true },
        }
        expect( setFilters( { active: true } ) ).toEqual( expectedAction );
    } );

    it( 'should create and action to set new value to searchParams.searchPhrase', () => {
        const expectedAction = {
            type: ProductsActionType.SET_SEARCH_PHRASE,
            payload: "test",
        }
        expect( setSearchPhrase( "test" ) ).toEqual( expectedAction );
    } );
} );