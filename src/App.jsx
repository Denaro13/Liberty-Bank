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
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user-dashboard" element={<SharedLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="/user-dashboard/accounts" element={<Accounts />} />
          <Route path="/user-dashboard/profile" element={<Profile />} />
          <Route path="/user-dashboard/transfer" element={<Transfer />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
