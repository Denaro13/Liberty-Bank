import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { secondCustomFetch } from "../../utils/axios";

const initialState = {
  isLoading: false,
  admin: null,
};

export const registerAdmin = createAsyncThunk(
  "admin/registerAdmin",
  async (admin, thunkApi) => {
    console.log(`Register Admin : ${JSON.stringify(admin)}`);
    try {
      const resp = await secondCustomFetch.post("/customers", admin);
      console.log(resp);
    } catch (error) {
      console.log(error.response);
    }
  }
);
export const loginAdmin = createAsyncThunk(
  "admin/loginAdmin",
  async (admin, thunkApi) => {
    console.log(`Login Admin : ${JSON.stringify(admin)}`);
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
});

export default adminSlice.reducer;
