import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import InputField from "./inputField";
import SubmitButton from "./submit.button";
import Checkbox from "./checkbox";
import Loading from "./loading";
import "../styles/signInWindow.css";
import axios from "axios";
import auth from "../auth";
import { connect } from "react-redux";
import { setUser, getUser } from "../redux/user/userActions";
//import {Validate} from '../validation';

function SignInWindow(props) {
  /*const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [boxChecked, setBoxChecked] = useState(false);*/
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    boxChecked: false,
  });
  const [loginError, setLoginError] = useState("");

  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const loginErrorMsg = "Incorrect Email or invalid password. Try again.";

  const submitHandler = (e) => {
    e.preventDefault();

    setLoading(true);

    axios({
      method: "POST",
      url: "http://localhost:5000/api/login",
      data: {
        email: formValue.email.toLowerCase(),
        password: formValue.password,
      },
    })
      .then((response) => {
        if (response.status === 204 || response.status === 401) {
          setLoading(false);
          setLoginError(loginErrorMsg);
        } else {
          setLoading(false);
          auth.login(() => {
            console.log("LOGIN RESPONSE >>> USER");
            console.log(response.data);
            props.setUser(response.data);
            history.push("/dashboard");
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangeEmail = (e) => {
    if (loginError !== "") {
      setLoginError("");
    }
    setFormValue({ ...formValue, email: e.target.value });
  };

  const handleChangePassword = (e) => {
    if (loginError !== "") {
      setLoginError("");
    }
    setFormValue({ ...formValue, password: e.target.value });
  };

  const handleCheckbox = (e) => {
    //setBoxChecked(!boxChecked);
    setFormValue((prevValue) => ({
      ...prevValue,
      boxChecked: !prevValue.boxChecked,
    }));
  };

  return (
    <div className="signin-window">
      <div className="signInWindow__header">
        <h1>Sign In</h1>
        <span>{loading ? <Loading /> : null}</span>
      </div>
      <form className="signin-window-form" onSubmit={submitHandler}>
        <InputField
          value={formValue.email}
          onChange={handleChangeEmail}
          type="email"
          placeholder="Enter your email"
          required={true}
        />
        <InputField
          value={formValue.password}
          onChange={handleChangePassword}
          type="password"
          placeholder="Enter your password"
          required={true}
        />
        <SubmitButton buttonText="Sign In" />
        <p className="login__error-msg">{loginError}</p>
      </form>
      <div className="remember-me">
        <Checkbox
          id="remember-me"
          label="Remember Me"
          onChange={handleCheckbox}
        />
        <a className="need-help" href="/">
          Need help?
        </a>
      </div>
      <div className="login-options">
        <a href="/signin">
          <i className="fab fa-facebook"></i> Login with Facebook
        </a>
        <a href="/signin">
          <i className="fab fa-google"></i> Login with Google
        </a>
      </div>
      <p className="new-user">
        New to WEBFLIX?{" "}
        <Link to="/signup">
          <span className="signup-now">Sign Up now.</span>
        </Link>
      </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
    getUser: () => dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInWindow);
