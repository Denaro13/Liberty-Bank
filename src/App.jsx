import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing, Error, Register } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  UserDashboard,
  Accounts,
  Profile,
  Transfer,
  SharedLayout,
} from "./pages/userDashboard";
import {
  AdminDashboard,
  AdminProfile,
  AdminSharedLayout,
} from "./pages/adminDashboard";
function App() {
  const user = "james";
  const admin = "usman";
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/user/${user}`} element={<SharedLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path={`/user/${user}/accounts`} element={<Accounts />} />
          <Route path={`/user/${user}/profile`} element={<Profile />} />
          <Route path={`/user/${user}/transact`} element={<Transfer />} />
        </Route>
        <Route path={`/admin/${admin}`} element={<AdminSharedLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path={`/admin/${admin}/profile`} element={<AdminProfile />} />
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
