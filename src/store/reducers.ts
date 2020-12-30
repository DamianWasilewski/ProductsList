import { combineReducers } from 'redux';
import { authReducer } from './auth/reducers';
import { productsReducer } from './products/reducers';


export const rootReducer = combineReducers({
    auth: authReducer,
    products: productsReducer,
});



