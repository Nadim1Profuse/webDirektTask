import { createSlice } from "@reduxjs/toolkit";
import initialCustomers from "./initialCustomers";

const initialState = {
  customers: initialCustomers,
};

const CustomerSlice = createSlice({
  name: "Customer",
  initialState,
  reducers: {
    addCustomer: (state, { payload }) => {
      state.customers.push(payload);
    },

    updateCustomer: (state, { payload }) => {
      console.log("createSlice updateCustomer reducer payload", payload);
      state.customers[payload.index] = payload.data;
    },

    deleteCustomer: (state, { payload }) => {
      console.log("delete Customer Reducer index=", payload.index);
      state.customers = state.customers.filter(
        (val, i) => i !== parseInt(payload.index)
      );
    },
  },
});

export const { addCustomer, updateCustomer, deleteCustomer } =
  CustomerSlice.actions;
export default CustomerSlice.reducer;
