import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  isShowing: false,
};
const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    showTransaction(state, action) {
      state.isShowing = true;
    },
    hideTransactions(state) {
      state.isShowing = true;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
