import "./App.css";
import backgrd from "./newBackgrd.jpg";
import Main from "./Main/Main.js";

function App() {
  return (
    <div>
      <div className="img" onClick={() => window.location.reload(false)}>
        <img src={backgrd} />
      </div>
      <Main />
    </div>
  );
}

export default App;
