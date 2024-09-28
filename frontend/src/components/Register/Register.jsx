import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import css from "./style.module.css";

const Login = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/user/register/", {
        email,
        username,
        password,
      });
      console.log({
        email,
        username,
        password,
      });

      console.log(response.data);
      navigate("/login");
      toast.success("Register successfully!!!");
    } catch (error) {
      toast.error("Something went wrong...");
      console.log(error);
    }
  };

  return (
    <section className="register">
      <div className="container">
        <Toaster />
        <h2 className={css.title}>Register</h2>
        <form className={css.form} onSubmit={handleSubmit}>
          <label>
            {" "}
            <input
              className={css.form__input}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            <input
              className={css.form__input}
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            <input
              className={css.form__input}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button
            className={css.form__redirect}
            onClick={() => navigate("/login")}
          >
            Already have account?
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
