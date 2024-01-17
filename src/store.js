import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./features/admin/adminSlice";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: {
    admin: adminSlice,
    user: userSlice,
  },
});
