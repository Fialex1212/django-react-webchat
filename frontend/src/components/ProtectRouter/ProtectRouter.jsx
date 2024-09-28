import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRouter;
