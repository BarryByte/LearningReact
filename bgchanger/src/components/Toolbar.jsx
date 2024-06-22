import React, { useState } from "react";
import ButtonCard from "./ButtonCard";
import "./Toolbar.css";

function Toolbar() {
  const [activeColor, setActiveColor] = useState(null);

  const changeColor = (colorCode) => {
    document.body.style.backgroundColor = `#${colorCode}`;
    setActiveColor(colorCode);
  };
  const colorCodes = [
     // Grays
     "A9A9A9",
     "D3D3D3",
     "708090",
    // Reds
    "FA8072",
    "F08080",
    "FF6347",
    "DC143C",
    "FF4500",
    "FF8C00",
    "E31818",
    "B22222",
    "A52A2A",

    // Oranges and Browns
    "FFA500",
    "FF4500",
    "D2691E",
    "8B4513",

    // Yellows
    "FFFF00",
    "FFD700",
    "F5DEB3",

    // Greens
    "00FF00",
    "ADFF2F",
    "00FA9A",
    "008000",
    "9ACD32",
    "00FF00",
    "008080",

    // Blues
    "87CEFA",
    "87CEEB",
    "00FFFF",
    "40E0D0",
    "00BFFF",
    "1E90FF",
    "4682B4",
    "6495ED",
    "0000FF",
    "000080",
    "5F9EA0",
    "708090",

    // Purples
    "EE82EE",
    "8A2BE2",
    "7B68EE",
    "6A5ACD",
    "800080",
    "8A2BE2",

    // Pinks
    "FF69B4",
    "FF1493",
    "EE82EE"

   
  ];
  return (
    <div className="toolbar-parent">
      {colorCodes.map((colorCode) => (
        <ButtonCard
          key={colorCode}
          onClick={() => changeColor(colorCode)}
          name={colorCode}
          colorCode={colorCode}
          isActive={activeColor === colorCode}
        />
      ))}
    </div>
  );
}

export default Toolbar;
