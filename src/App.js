import "./App.css";
import React from "react";
import Popup from "./Popup.jsx";

function App() {
  const [popup, setPopup] = React.useState(false);
  const handleClick = () => {
    setPopup(true);
  };

  return (
    <div className="App">
      <button className="click" onClick={() => handleClick()}>
        REACT JS
      </button>
      <Popup open={popup} close={() => setPopup(false)} />
    </div>
  );
}

export default App;
