import React, { Children, createContext, useReducer, useState } from 'react'
import { UsageReducer } from '../reducer/UsageReducer';

export const CountContext = createContext()

export function CartContext({children}) {
    // const [count, setCount] = React.useState(0)

    const initialState = {
        cart: [],
        selectedCategory: "chicken"
    }
    const [state, dispatch] = useReducer(UsageReducer, initialState);
    

  return (
    <CountContext.Provider value={{state, dispatch}}>
        {children}
    </CountContext.Provider>
  )
}
