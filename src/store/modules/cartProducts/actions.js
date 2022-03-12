import { ADD_PRODUCTS_TO_CART, REMOVE_PRODUCTS_FROM_CART } from "./actionsType";

export const addProducts = (newCart) => ({
    type: ADD_PRODUCTS_TO_CART,
    newCart
});

export const removeProducts = (newCart) => ({
    type: REMOVE_PRODUCTS_FROM_CART,
    newCart
})