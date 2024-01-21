import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { firstCustomFetch } from "../../utils/axios";
import {
  addAdminToLocalStorage,
  getAdminFromLocalStorage,
  removeAdminFromLocalStorage,
} from "../../utils/adminLocalStorage";

const initialState = {
  isLoading: false,
  admin: getAdminFromLocalStorage(),
};

export const registerAdmin = createAsyncThunk(
  "admin/registerAdmin",
  async (admin, thunkAPI) => {
    // console.log(`Register Admin : ${JSON.stringify(admin)}`);
    try {
      const resp = await firstCustomFetch.post("/users", admin);
      console.log(resp);
      return resp.data;
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const loginAdmin = createAsyncThunk(
  "admin/loginAdmin",
  async (admin, thunkAPI) => {
    // console.log(`Login Admin : ${JSON.stringify(admin)}`);
    try {
      const resp = await firstCustomFetch.post("/api/v1/auth/login", admin);
      // console.log(resp.data);
      return resp.data;
    } catch (error) {
      // console.log(error.response);
      // toast.error("there was an error");
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    logout: (state) => {
      state.admin = null;
      removeAdminFromLocalStorage();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerAdmin.fulfilled, (state, { payload }) => {
        const admin = payload;
        state.isLoading = false;
        console.log(admin);
        toast.success(`Hello There ${admin.results.firstName}, Kindly Login`);
      })
      .addCase(registerAdmin.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAdmin.fulfilled, (state, { payload }) => {
        const admin = payload;
        state.isLoading = false;
        state.admin = admin;
        addAdminToLocalStorage(admin);
        toast.success(`Welcome Back ${admin.name}`);
      })
      .addCase(loginAdmin.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { logout } = adminSlice.actions;

export default adminSlice.reducer;
