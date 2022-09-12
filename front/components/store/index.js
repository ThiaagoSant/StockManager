import { createStore } from "redux";
import axios from "axios";

import { BASE_URL } from "../../constants/urls";

let INITAL_STATE = {
  id: "",
};

function reducer(state = INITAL_STATE, action) {
  if (action.type === "TOGGLE_ID") {
    return { ...INITAL_STATE, id: action.id };
  }

  if (action.type === "GET_ALL_PRODUCTS") {
    const getProducts = async () => {
      const response = await axios.get(`${BASE_URL}/products?page=${action.page}`);
      return response;
    };
    return { ...state, products: getProducts() };
  }

  return state;
}

const store = createStore(reducer);

export default store;
