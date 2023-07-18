import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UserData {
  userName: string;
  userPhoto: string;
  email: string;
  userId: string;
}

interface InitialStateAuth {
  userData: UserData;
}

const initialUserData: UserData = {
  userName: "",
  userPhoto: "",
  email: "",
  userId: "",
};

const initialState: InitialStateAuth = {
  userData: initialUserData,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userData = action.payload;
    },
    removeActiveUser: (state) => {
      state.userData = initialUserData;
    },
  },
});

export const { setActiveUser, removeActiveUser } = authSlice.actions;

export const getUserData = (state: RootState) => state.auth.userData;
export default authSlice.reducer;
