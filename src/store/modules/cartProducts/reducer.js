import { ADD_PRODUCTS_TO_CART } from "./actionsType";

const digimonsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCTS_TO_CART:
      return [...state, action.product];
    default:
      return state;
  }
};

export default digimonsReducer;
