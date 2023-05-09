import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from '../constants/actionTypes';

const initialState = {
  items: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        items: state.items.filter((product) => product.id !== action.payload),
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        items: state.items.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
