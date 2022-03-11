import { ADD_PRODUCTS_TO_CART } from "../products/actionsType";

export const addProducts = (product) => ({
    type: ADD_PRODUCTS_TO_CART,
    product
})