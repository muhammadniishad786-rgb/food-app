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

    // this for the quantity changing in the cart page
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

    case "REMOVE_FROM_CART" :
        return{
            ...state,
            cart: state.cart.filter((items) => items.idMeal !== action.payload)
            
        }
        
    case "SET_CATEGORY" :
      return{
        ...state,
        selectedCategory: action.payload
      }
      
    default:
      return state;
  }


  
};


// "Keep all the existing properties in the state, and only change the property I specify."
