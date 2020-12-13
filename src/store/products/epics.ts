import { combineEpics, ofType, StateObservable } from "redux-observable";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { FetchProductsAction, fetchProductsFail, fetchProductsSuccess, ProductsActionType } from "./actions";
import { RootState } from "../state";
import { fetchProducts } from "../../services";

function fetchProductsEpic( action$: Observable<FetchProductsAction>, state$: StateObservable<RootState> ) {
    return action$.pipe(
        ofType( ProductsActionType.FETCH_PRODUCTS ),
        mergeMap( ( action ) => fetchProducts( action.payload ).pipe(
                map( response => fetchProductsSuccess( response ) ),
                catchError( ( error ) => of( fetchProductsFail( error ) ) ),
            ),
        ),
    );
}

export const productsEpic = combineEpics(
    fetchProductsEpic
);