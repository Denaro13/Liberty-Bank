import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const { admin } = useSelector((store) => store.admin);

  if (!admin) {
    return <Navigate to="/" />;
  }

  return children;
};
export default AdminProtectedRoute;
