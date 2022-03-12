import { addProducts, removeProducts } from "./actions";

export const addProductsThunk = (product) => (dispatch, getState) => {
  const { cartProducts } = getState();
  const newCart = [...cartProducts, product];
  localStorage.setItem("@KenzieShop:productsCart", JSON.stringify(newCart));
  dispatch(addProducts(newCart));
};

export const removeProductsThunk = (product) => (dispatch, getState) => {
  const { cartProducts } = getState();
  cartProducts.splice(
    cartProducts.findIndex((cartProduct) => cartProduct.name === product.name),
    1
  );
  const newCart = [...cartProducts];
  localStorage.setItem("@KenzieShop:productsCart", JSON.stringify(newCart));
  dispatch(removeProducts(newCart));
};
