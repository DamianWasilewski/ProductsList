import { combineEpics } from "redux-observable";
import { authEpic } from "./auth/epics";
import { productsEpic } from "./products/epics";

export const rootEpic = combineEpics(
    authEpic,
    productsEpic
);