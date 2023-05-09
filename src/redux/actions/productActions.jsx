import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from '../constants/actionTypes';

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
});

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});
