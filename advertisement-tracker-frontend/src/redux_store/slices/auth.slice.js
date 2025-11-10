import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthorized: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.user = action.payload;
      state.isAuthorized = true;
    },
    clearAuth: (state) => {
      state.user = null;
      state.isAuthorized = false;
    },
  },
});

export const { setAuthData, clearAuth } = authSlice.actions;
export default authSlice.reducer;
