import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./inputField";
import Validation from "../validation";
import axios from "axios";
import "../styles/signUpWindow.css";

function SignUpWindow() {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    dateOfBirth: "",
  });
  const [error, setError] = useState({});

  const handleEmailChange = (e) => {
    setFormValue({ ...formValue, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setFormValue({ ...formValue, password: e.target.value });
  };
  const handleNameChange = (e) => {
    setFormValue({ ...formValue, name: e.target.value });
  };

  const clearErrorMsgs = () => {
    let errorMsgs = document.querySelectorAll(".error-msg");

    for (let i = 0; i < errorMsgs.length; i++) {
      errorMsgs[i].textContent = "";
    }
  };

  const setErrorMsgs = (errors) => {
    if (errors.hasOwnProperty("emailError")) {
      document.getElementById(
        "email-error"
      ).textContent = `${errors.emailError}`;
    }
    if (errors.hasOwnProperty("passwordError")) {
      document.getElementById(
        "password-error"
      ).textContent = `${errors.passwordError}`;
    }
    if (errors.hasOwnProperty("confirmPasswordError")) {
      document.getElementById(
        "confirm-password-error"
      ).textContent = `${errors.confirmPasswordError}`;
    }
    if (errors.hasOwnProperty("dobError")) {
      document.getElementById("dob-error").textContent = `${errors.dobError}`;
    }

    if (errors.hasOwnProperty("registrationError")) {
      document.getElementById(
        "registration-error"
      ).textContent = `${errors.registrationError}`;
    }
  };

  const validateForm = () => {
    let err = {};
    clearErrorMsgs();

    let checkEmail = new Validation(formValue.email);
    let checkPassword = new Validation(formValue.password);
    let checkDOB = new Validation(formValue.dateOfBirth);

    if (!checkEmail.isValidEmail()) {
      err.emailError = "Your email is incorrect.";
    }

    if (!checkPassword.isValidPassword()) {
      err.passwordError =
        "Your password must be at least 8 characters long and contain at least 3 numeric characters.";
    }

    if (formValue.password !== formValue.password2) {
      err.confirmPasswordError =
        '"Password" and "Confirm Password" fields MUST have the same values.';
    }

    if (!checkDOB.isValidDateOfBirth()) {
      err.dobError = "You must be at least 18 years old to register!";
    }
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let err = validateForm();

    if (Object.getOwnPropertyNames(err).length === 0) {
      clearErrorMsgs();

      // alert(`\tName: ${formValue.name}\n
      //       Email: ${formValue.email}\n
      //       Password: ${formValue.password} \n
      //       Date Of Birth: ${formValue.dateOfBirth}`);

      axios({
        method: "POST",
        url: "http://localhost:5000/api/signup",
        data: {
          name: formValue.name,
          email: formValue.email.toLowerCase(),
          dateOfBirth: formValue.dateOfBirth,
          password: formValue.password,
        },
      })
        .then((res) => {
          if (res.status === 201) {
            alert("Account successfully created!");
          } else {
            alert("Email already in use! Try again.");
          }
        })
        .catch((err) => {
          console.log("ERROR: ", err);
          setError({
            ...error,
            registrationError:
              "Something with registration went wrong. Please try again later.",
          });
        });

      setFormValue({
        name: "",
        email: "",
        password: "",
        password2: "",
        dateOfBirth: "",
        gender: "male",
      });
    } else {
      setErrorMsgs(err);
      setError(err);
    }
  };

  return (
    <div className="signup-window">
      <h1>Sign Up</h1>
      <form className="signup-window-form" onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Full name"
          value={formValue.name}
          onChange={handleNameChange}
        />
        <InputField
          type="text"
          placeholder="Email"
          value={formValue.email}
          onChange={handleEmailChange}
        />
        <p id="email-error" className="error-msg"></p>
        <InputField
          type="password"
          placeholder="Password"
          value={formValue.password}
          onChange={handlePasswordChange}
        />
        <p id="password-error" className="error-msg"></p>
        <InputField
          type="password"
          placeholder="Confirm Password"
          value={formValue.password2}
          onChange={(e) => {
            setFormValue({ ...formValue, password2: e.target.value });
          }}
        />
        <p id="confirm-password-error" className="error-msg"></p>
        <InputField
          type="date"
          placeholder="Date of Birth"
          value={formValue.dateOfBirth}
          onChange={(e) => {
            setFormValue({ ...formValue, dateOfBirth: e.target.value });
          }}
        />
        <p id="dob-error" className="error-msg"></p>
        <button type="submit">Sign Up</button>
        <p id="registration-error">{error.registrationError}</p>
      </form>
      <p className="signin-notice">
        <Link to="/signin" className="signin">
          Sign In
        </Link>{" "}
        with existing account.
      </p>
    </div>
  );
}

export default SignUpWindow;
