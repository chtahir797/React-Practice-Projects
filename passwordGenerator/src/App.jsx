import { useState, useEffect, useRef } from "react";
import "./App.css";
import Input from "./Input";
import Popup from "./Popup";
import DisplayResults from "./DisplayResults";
import { useCallback } from "react";
function App() {
  const [range, setRange] = useState(0);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState("");
  const [popup, setPopup] = useState(false);
  const [time, setTime] = useState(2);
  const copyRef = useRef();
  const condition = popup ? "popup" : "popup-hide";
  const randomPass =   useCallback(()=>{
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "1234567890";
    let characters = "~!@#$%^&*()_+{}|':?><";
    if (num) alphabets += numbers;
    if (char) alphabets += characters;
    let password = "";
    for (let i = 0; i < range; i++) {
      password += alphabets[Math.floor(Math.random() * alphabets.length)];
    }
    setPass(password);
  },[range,num,char])
  useEffect(() => {
    randomPass();
  }, [range, num, char]);
  const copyPass = () => {
    navigator.clipboard.writeText(copyRef.current.innerText);
    setPopup(true);
    setTime(2);
    const countdown = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(countdown);
          setPopup(false);
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  return (
    <>
      {/* Popup Component  */}
      <Popup myclass={condition} time={time} />
      <div className="parent">
        <div className="main-heading">
          <h1>Welcome to Password Generator App</h1>
        </div>
        <div className="inputs">
          <div className="range">
            {/* Input Component  */}
            <Input
              type="range"
              name="range"
              id="range"
              value={range}
              change={(e) => setRange(e.target.value)}
              max={10}
            />
            {range}
          </div>
          <div className="checkboxs">
            {/* Input Component  */}
            <Input
              type="checkbox"
              name="checkbox"
              id="characters"
              change={(e) => setChar(!char)}
            />
            Include Speacial Characters
            {/* Input Component  */}
            <Input
              type="checkbox"
              name="checkbox"
              id="characters"
              change={(e) => setNum(!num)}
            />
            Include Numbers
          </div>
        </div>
        {/* DisplayResults Component  */}
        <DisplayResults pass={pass} copyRef={copyRef} copyPass={copyPass} />
      </div>
    </>
  );
}
export default App;
