import { createSlice } from "@reduxjs/toolkit";

const initialProfileState = {
  isLoggedIn: false,
  email: "",
  assets: [],
  token: "",
};
const profileSlice = createSlice({
  name: "profile",
  initialState: initialProfileState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = "";
    },
    setEmail(state, action) {
      state.email = action.payload.email;
    },
    setAssets(state, action) {
      state.assets = action.payload.assets;
    },
  },
});

export const profileActions = profileSlice.actions;
export default profileSlice;
