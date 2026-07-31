import React, { Children, createContext, useReducer, useState } from 'react'
import { UsageReducer } from '../reducer/UsageReducer';

export const CountContext = createContext()

export function CartContext({children}) {
    // const [count, setCount] = React.useState(0)
    const [meal, setMeal] = React.useState([])

    const initialState = {
        cart: [],
        selectedCategory: "chicken"
    }
    const [state, dispatch] = useReducer(UsageReducer, initialState);
    

  return (
    <CountContext.Provider value={{state, dispatch, meal, setMeal}}>
        {children}
    </CountContext.Provider>
  )
}
