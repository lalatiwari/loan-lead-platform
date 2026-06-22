import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isLoggedIn: false,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },

    loginSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload;
      state.isLoggedIn = true;
    },

    logout: (state) => {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  logout,
} = authSlice.actions;

export default authSlice.reducer;