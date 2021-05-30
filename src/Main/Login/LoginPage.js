import "./LoginPage.css";
import SignupPage from "./SignupPage.js";
import { useState } from "react";
import ForgotPage from "./ForgotPage.js";

function LoginPage() {
  const [signupClicked, setSignupClicked] = useState(false);
  const [forgotClicked, setForgotClicked] = useState(false);

  function signupClickedHandler() {
    setSignupClicked(prevSignup => !prevSignup);
  }

  function forgotClickedHandler() {
    setForgotClicked(prevForgot => !prevForgot);
  }

  if (signupClicked) {
    return (
      <div>
        <SignupPage />
      </div>
    );
  }

  if (forgotClicked) {
    return (
      <div>
        <ForgotPage />
      </div>
    );
  }

  return (
    <form>
      <h3>Log in to Mahjong Kias!</h3>

      <div className="form-group">
        <label>User Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter ur fking name"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Submit
      </button>
      <p className="sign-up">
        Dont have an account? Sign up{" "}
        <a className="here" onClick={signupClickedHandler}>
          <a href="#"> here </a>
        </a>
      </p>
      <p className="forgot-password" onClick={forgotClickedHandler}>
        <a href="#">Forgot password?</a>
      </p>
    </form>
  );
}

export default LoginPage;
