import toast, { Toaster } from "react-hot-toast";
import {useEffect} from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear("token");
    toast.success("You are successfully logout!!!");
    navigate("/");
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <Toaster />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
