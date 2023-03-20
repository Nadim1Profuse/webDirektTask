import { configureStore } from '@reduxjs/toolkit'
import customerReducer from "./customerSlices/customersSlice"

export const store = configureStore({
  reducer: {
    customers:customerReducer
  },
})