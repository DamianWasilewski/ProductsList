import { combineEpics, ofType, StateObservable } from "redux-observable";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { AuthActionType, LoginAction, loginFail, loginSuccess } from "./actions";
import { RootState } from "../state";
import { login } from "services";

function loginEpic( action$: Observable<LoginAction>, state$: StateObservable<RootState> ) {
    return action$.pipe(
        ofType( AuthActionType.LOGIN ),
        mergeMap( ( action ) => login( action.payload ).pipe(
                map( response => loginSuccess() ),
                catchError( ( error ) => of( loginFail( error ) ) ),
            ),
        ),
    );
}

export const authEpic = combineEpics(
    loginEpic,
);