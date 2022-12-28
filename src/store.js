import { createStore } from "redux";
import addToCartReducer from "./store/reducers/CartReducer";

const store = createStore(addToCartReducer)

export default store;