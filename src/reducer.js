export const initialState = {
  basket: [],
  user: null,
};

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_FROM_PRODUCT: "REMOVE_FROM_PRODUCT",
  SET_USER: "SET_USER",
  EMPTY_BASKET: "EMPTY_BASKET",
};

export const getBasketValue = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reduce = (state, action) => {
  console.log("state,action", state, action);
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case actionTypes.REMOVE_FROM_PRODUCT:
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id == action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      }

      return {
        ...state,
        basket: newBasket,
      };

    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionTypes.EMPTY_BASKET:
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};

export default reduce;
