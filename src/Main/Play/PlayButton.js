import "./PlayButton.css";
import Card from "../../UI/Card";
import PlayMenu from './PlayMenu';

function PlayButton(props) {
  function clickHandler() {
    props.onClicked();
  }

  if (props.loginClicked || props.rentClicked) {
    return null;
  }

  if (props.playClicked === props.rentClicked) {
    return (
      <button className="play_button" onClick={clickHandler}>
        <h1>Play Mahjong!</h1>
      </button>
    );
  }

  return (
    <PlayMenu></PlayMenu>
  );
}
export default PlayButton;
