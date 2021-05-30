import "./Main.css";
import PlayButton from "./Play/PlayButton";
import LoginButton from "./Login/LoginButton";
import RentButton from "./Rent_Sale/RentButton";
import { useState } from "react";

function Main() {
  const [playClicked, setPlayClicked] = useState(false);
  const [rentClicked, setRentClicked] = useState(false);
  const [loginClicked, setLoginClicked] = useState(false);

  function playClickedHandler() {
    setPlayClicked((prevPlay) => !prevPlay);
  }
  function rentClickedHandler() {
    setRentClicked((prevRent) => !prevRent);
  }
  function loginClickedHandler() {
    setLoginClicked((prevLogin) => !prevLogin);
  }

  return (
    <div className="main">
      <LoginButton
        className="main_login"
        onClicked={loginClickedHandler}
        loginClicked={loginClicked}
      />
      <div>
        <div className="main_options">
          <PlayButton
            onClicked={playClickedHandler}
            playClicked={playClicked}
            rentClicked={rentClicked}
            loginClicked={loginClicked}
          />
        </div>
        <div className="main_options">
          <RentButton
            onClicked={rentClickedHandler}
            playClicked={playClicked}
            rentClicked={rentClicked}
            loginClicked={loginClicked}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
