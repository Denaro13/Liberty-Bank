import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { firstCustomFetch } from "../utils/axios";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../utils/userLocalStorage";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    // console.log(`Register User : ${JSON.stringify(user)}`);
    try {
      const resp = await firstCustomFetch.post("/users", user);
      // return resp.data
      // console.log(resp);
      return resp.data;
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    // console.log(`Login User : ${JSON.stringify(user)}`);
    try {
      const resp = await firstCustomFetch.post("/api/v1/auth/login", user);
      // console.log(resp.data);
      return resp.data;
    } catch (error) {
      // console.log(error.response);
      // toast.error("there was an error");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logout: (state) => {
      state.user = null;
      removeUserFromLocalStorage();
      localStorage.removeItem("image");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const user = payload;
        state.isLoading = false;
        const name = user.results.firstName;
        // state.user = user;
        // addUserToLocalStorage(user);
        toast.success(`Hello There ${name}, Kindly Login`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        // console.log(payload);
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const user = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Welcome Back ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { toggleSidebar, logout } = userSlice.actions;

export default userSlice.reducer;
