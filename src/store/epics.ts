import { combineEpics, ofType, StateObservable } from "redux-observable";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { fetchProductsSuccess, fetchProductsFail, FetchProductsAction, ProductsActionType } from "./actions";
import { RootState } from "./state";
import { fetchProducts } from "../services";

function fetchProductsEpic( action$: Observable<FetchProductsAction>, state$: StateObservable<RootState> ) {
    return action$.pipe(
        ofType( ProductsActionType.FETCH_PRODUCTS ),
        mergeMap( () => fetchProducts().pipe(
                map( response => fetchProductsSuccess( response ) ),
                catchError( ( error ) => of( fetchProductsFail( error ) ) ),
            ),
        ),
    );
}

export const rootEpic = combineEpics(
    fetchProductsEpic
);