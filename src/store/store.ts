  
import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./epics";
import { rootReducer } from "./reducers";
import { RootState } from "./state";


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore(initialState?: RootState) {
  const middlewares = [epicMiddleware];
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  return createStore(rootReducer, initialState, enhancer);
}

export const store = configureStore();

epicMiddleware.run(rootEpic as any);