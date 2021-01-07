import React, { useReducer, createContext } from 'react'

import contextReducer from './contextReducer'

const initialState = JSON.parse(localStorage.getItem('transactions')) || []

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState)

  const addTransaction = transaction => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
  }

  const deleteTransaction = id => {
  dispatch({ type: 'DELETE_TRANSACTION', payload: id })
 }

 const balance = transactions.reduce((acc, cur) => {
   return (cur.type === 'Expense' ? acc - cur.amount : acc + cur.amount)
 }, 0)

  return (
    <ExpenseTrackerContext.Provider
      value={{
        transactions,
        balance,
        addTransaction,
        deleteTransaction
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  )
}