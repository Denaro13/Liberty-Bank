import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./features/admin/adminSlice";
import userSlice from "./features/userSlice";
import generalSlice from "./features/generalSlice";

export const store = configureStore({
  reducer: {
    admin: adminSlice,
    user: userSlice,
    general: generalSlice,
  },
});
