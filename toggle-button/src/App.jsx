import { useState } from "react";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle((pre) => (pre ? false : true));
  };
  toggle
    ? (document.body.style.backgroundColor = "#242424")
    : (document.body.style.backgroundColor = "#542F24");
  return (
    <>
      <p>Click me to toggle</p>
      <button onClick={handleToggle}>{toggle ? "ON" : "OFF"}</button>
    </>
  );
}

export default App;
