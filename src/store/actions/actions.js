import * as actionTypes from "./actionTypes";

export const addItem = item => {
  return {
    type: actionTypes.ADD_ITEM,
    item: item
  };
};

export const updateItem = (items) => {
  return {
    type: actionTypes.UPDATE_ITEM,
    items: items,
  };
};

export const deleteItem = items => {
  return {
    type: actionTypes.DELETE_ITEM,
    items: items
  };
};

export const setErorr = () => {
  return {
    type: actionTypes.SET_ERROR
  };
};
