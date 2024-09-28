import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";
import css from "./style.module.css";

const Login = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/user/token/",
        formData
      );
      console.log(response.data.access);

      localStorage.setItem("token", response.data.access);
      toast.success("Login successfully!!!");
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong...");
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <section className="login">
      <div className="container">
        <Toaster />
        <h2 className={css.title}>Login</h2>
        <form className={css.form} onSubmit={handleSubmit}>
          <label>
            <input
              className={css.form__input}
              type="email"
              name="email"
              placeholder="Email"
              value={formData.value}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <input
              className={css.form__input}
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <button
            className={css.form__redirect}
            onClick={() => navigate("/register")}
          >
            Don't have account?
          </button>
          <button className={css.form__button} type="submit">
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
