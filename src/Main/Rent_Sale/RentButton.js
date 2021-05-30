import "./RentButton.css";
import Card from "../../UI/Card";

function RentButton(props) {
  function clickHandler() {
    props.onClicked();
  }

  if (props.loginClicked || props.playClicked) {
    return null;
  }

  if (props.playClicked === props.rentClicked) {
    return (
      <button className='rent_button' onClick={clickHandler}>
        <h1>Rent & Sale</h1>
      </button>
    );
  }

  return (
    <div>
      <h2>Rent clicked!</h2>
    </div>
  );
}

export default RentButton;
