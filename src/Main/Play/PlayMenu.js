import "./PlayMenu.css";
import { useState } from "react";

function PlayMenu() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noClicked, setNoClicked] = useState(false);

  

  return (
    <div className="play">
      <h3 font-weight="bold">Do you have a full party?</h3>
      <div className="play_options">
        <h1 className="play_option_yes">Yes</h1>
        <h1 className="play_option_no">No</h1>
      </div>
    </div>
  );
}

export default PlayMenu;
