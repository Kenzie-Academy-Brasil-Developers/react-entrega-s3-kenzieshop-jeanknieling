import { ADD_PRODUCTS_TO_CART, REMOVE_PRODUCTS_FROM_CART } from "./actionsType";

const cartProductsReducer = (
  state = JSON.parse(localStorage.getItem("@KenzieShop:productsCart"))
    ? JSON.parse(localStorage.getItem("@KenzieShop:productsCart"))
    : [],
  action
) => {
  switch (action.type) {
    case ADD_PRODUCTS_TO_CART:
      return action.newCart;
    case REMOVE_PRODUCTS_FROM_CART:
      return action.newCart;
    default:
      return state;
  }
};

export default cartProductsReducer;
