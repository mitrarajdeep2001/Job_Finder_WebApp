import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  authModal: false,
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
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.token = null;
    },
  },
});

export const { setTheme, setAuthModal, setLogin, setLogout } =
  authSlice.actions;
export default authSlice.reducer;
