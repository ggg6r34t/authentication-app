import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { User } from "../../type/types";

type UserState = {
  userInformation: User | null;
  isLoading: boolean;
  isLogin: boolean;
};

const storedUserState = localStorage.getItem("userState");
const initialState: UserState = storedUserState
  ? JSON.parse(storedUserState)
  : {
      userInformation: null,
      isLoading: true,
      isLogin: false,
    };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.userInformation = action.payload;

      localStorage.setItem("userState", JSON.stringify(state));
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    userLogin: (state, action) => {
      state.isLogin = action.payload;
      localStorage.setItem("userState", JSON.stringify(state));
    },
    logOut: (state) => {
      state.userInformation = null;
      state.isLogin = false;
      localStorage.removeItem("userState");
    },
  },
});

export const userActions = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
