import "./LoginButton.css";
import LoginPage from "./LoginPage";

function LoginButton(props) {
  function clickHandler() {
    props.onClicked();
    console.log("hello");
  }

  if (props.loginClicked) {
    return (
      <div>
        <LoginPage />
      </div>
    );
  }

  return (
    <div className="login_button" onClick={clickHandler}>
      Log in
    </div>
  );
}

export default LoginButton;
