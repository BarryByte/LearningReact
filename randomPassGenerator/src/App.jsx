import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [pass, setPass] = useState("");
  //ref hook
  const passRef = useRef(null);
  const copyPassToClipboard = useCallback(() => {
    passRef.current?.select()
     window.navigator.clipboard.writeText(pass);
  },[pass])

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "zyxwvutsrqponmlkjihgfedcbaABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let number = "0123456789";
    let symbol = "!@#$%^&*()_+{}:<>?[]";
    if (numberAllowed) str += number;
    if (characterAllowed) str += symbol;
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPass(pass);
  }, [length, numberAllowed, characterAllowed, setPass]);

  useEffect(() => {
    passGenerator();
  }, [length, numberAllowed, characterAllowed]);

  return (
    <>
      <p>Random Pass Generator</p>
      <div className="main-container">
        <div className="password-container">
          <input 
          type="text" 
          value={pass}
          placeholder="PassWord"
          ref={passRef}

           readOnly />
          <button 
          onClick={copyPassToClipboard}
          className="button copy-btn">Copy</button>
        </div>
        <div className="lenNumChar">
          <div className="length">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            Length : {length}
          </div>
          <div className="Numbers">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            Numbers
          </div>
          <div className="Characters">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="charInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            Characters
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
