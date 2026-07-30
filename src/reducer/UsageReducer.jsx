export const UsageReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      // Check if the item already exists
      const existingItem = state.cart.find(
        (item) => item.idMeal === action.payload.idMeal,
      );

      // If it exists, increase quantity
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.idMeal === action.payload.idMeal
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      // Otherwise add it with quantity = 1
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.payload,
            quantity: 1,
            price: 13
          },
        ],
      };
    }

    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.idMeal === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.idMeal === action.payload
            ? {
                ...item,
                quantity: Math.max(0, item.quantity - 1),
              }
            : item,
        ),
      };

    default:
      return state;
  }
};
