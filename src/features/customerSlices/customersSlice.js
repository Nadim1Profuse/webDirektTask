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

    sortByFirstName: (state, { payload }) => {
      console.log("in firstname sorting payload=", payload);
      if (payload) {
        state.customers = state.customers.sort((a, b) =>
          a.fName > b.fName ? 1 : -1
        );
      } else {
        state.customers = state.customers.sort((a, b) =>
          a.fName < b.fName ? 1 : -1
        );
      }
    },

    sortByAdd1: (state, { payload }) => {
      console.log("sortByAdd1 payload=", payload);
      if (payload) {
        state.customers = state.customers.sort((a, b) =>
          a.add1 > b.add1 ? 1 : -1
        );
      } else {
        state.customers = state.customers.sort((a, b) =>
          a.add1 < b.add1 ? 1 : -1
        );
      }
    },
  },
});

export const {
  addCustomer,
  updateCustomer,
  deleteCustomer,
  sortByFirstName,
  sortByAdd1,
} = CustomerSlice.actions;
export default CustomerSlice.reducer;
