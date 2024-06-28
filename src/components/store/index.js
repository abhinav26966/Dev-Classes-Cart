import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./Cart";
import { productsReducer } from "./Products";

const reducer = combineReducers({
	cart: cartReducer,
	products: productsReducer,
});
const store = createStore(reducer, applyMiddleware(thunk));
export default store;