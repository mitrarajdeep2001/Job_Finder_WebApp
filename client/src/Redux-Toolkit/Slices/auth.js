import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  authModal: false,
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setAuthModal: (state, action) => {
      state.authModal = action.payload;
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setTheme, setAuthModal, setLogin, setLogout } =
  authSlice.actions;
export default authSlice.reducer;
