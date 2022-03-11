import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import cartProductsReducer from "./modules/cartProducts/reducer"
import productsReducer from "./modules/products/reducer"

const reducers = combineReducers({
    cartProduct: cartProductsReducer,
    products: productsReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
