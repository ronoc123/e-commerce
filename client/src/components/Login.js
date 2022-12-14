import Wrapper from "../assets/wrappers/RedirectLogin";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import FormRow from "./FormRow";
import Alert from "./Alert";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Login = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const { displayAlert, showAlert, user, setupUser, closeLogin } =
    useAppContext();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
  };

  const inputSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values;
    if (!email || !password || (!isLogin && name)) {
      displayAlert();
    }
    const currentUser = { name, email, password };

    if (!isLogin) {
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Logging in User...",
      });
    }

    if (isLogin) {
      setupUser({
        currentUser,
        endPoint: "register",
        alertText: "Registering User...",
      });
    }
  };
  const demoLogin = () => {
    const currentUser = {
      name: "",
      email: ["Test@gmail.com"],
      password: ["123456"],
    };
    setupUser({
      currentUser,
      endPoint: "login",
      alertText: "Logging in User...",
    });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        closeLogin();
      }, 2000);
    }
  }, [user]);

  return (
    <Wrapper>
      <div className="container">
        <button className="close-icon" onClick={() => closeLogin()}>
          <AiOutlineCloseSquare />
        </button>
        <form className="login-container" onSubmit={inputSubmit}>
          <h1 className="title">{isLogin ? "Register" : "Login"}</h1>
          {showAlert && <Alert />}
          {isLogin && (
            <FormRow
              type="name"
              name="name"
              value={values.name}
              handleChange={handleChange}
            />
          )}
          <FormRow
            type="email"
            name="email"
            value={values.email}
            handleChange={handleChange}
          />
          <FormRow
            name="password"
            type="password"
            value={values.password}
            handleChange={handleChange}
          />
          <div className="btn-containers">
            <button className="login-btn" type="submit">
              {isLogin ? "Register" : "Login"}
            </button>
            <button className="login-btn" onClick={demoLogin}>
              Demo
            </button>
          </div>
          <p className="p-title">
            {isLogin ? "Already a member? " : "Not a member yet? "}
            <button
              className="member-btn"
              type="button"
              onClick={(e) => setIsLogin(!isLogin)}
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </p>
        </form>
      </div>
    </Wrapper>
  );
};

export default Login;
