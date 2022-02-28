import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialProfileState = {
  isLoggedIn: false,
  assets: [],
  token: "",
};
const profileSlice = createSlice({
  name: "profile",
  initialState: initialProfileState,
  reducers: {
    login(state, action) {},
    logout(state) {
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});
const store = configureStore({
  reducer: { profile: profileSlice.reducer },
});

export default store;
