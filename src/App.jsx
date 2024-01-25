import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing, Error, Register } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  UserDashboard,
  Accounts,
  Profile,
  Transactions,
  SharedLayout,
  UserProtectedRoute,
} from "./pages/userDashboard";
import {
  AdminAccounts,
  AdminDashboard,
  AdminProfile,
  AdminProtectedRoute,
  AdminSharedLayout,
  AdminTransactions,
  User,
} from "./pages/adminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`/user`}
          element={
            <UserProtectedRoute>
              <SharedLayout />
            </UserProtectedRoute>
          }
        >
          <Route index element={<UserDashboard />} />
          <Route path={`/user/accounts`} element={<Accounts />} />
          <Route path={`/user/profile`} element={<Profile />} />
          <Route path={`/user/transactions`} element={<Transactions />} />
        </Route>
        <Route
          path={`/admin`}
          element={
            <AdminProtectedRoute>
              <AdminSharedLayout />
            </AdminProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path={`/admin/profile`} element={<AdminProfile />} />
          <Route path={`/admin/account`} element={<AdminAccounts />} />
          <Route path={`/admin/transactions`} element={<AdminTransactions />} />
          <Route path={`/admin/user/:email`} element={<User />} />
        </Route>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
