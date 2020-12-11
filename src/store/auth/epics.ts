import { combineEpics, ofType, StateObservable } from "redux-observable";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { RootState } from "../state";

export const authEpic = combineEpics();