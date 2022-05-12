import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import "../styles/Home.css";

const data = [
  { id: 1, option: "🐧" },
  { id: 2, option: "🐊" },
  { id: 3, option: "🐝" },
  { id: 4, option: "🦍" },
  { id: 5, option: "🐯" },
  { id: 6, option: "🐳" },
  { id: 7, option: "🐼" },
  { id: 8, option: "🐺" },
  { id: 9, option: "🦭" },
  { id: 10, option: "🐢" },
];

export default function Home() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div>
      <div align="center">
        <h1 align="center">La Roue de la Malchance</h1>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          outerBorderColor={["#E24A2B"]}
          outerBorderWidth={[5]}
          innerBorderColor={["#f2f2f2"]}
          radiusLineColor={["#dedede"]}
          radiusLineWidth={[2]}
          textColors={["#ffffff"]}
          fontSize={[45]}
          perpendicularText={[true]}
          backgroundColors={[
            "#7353BA",
            "#FFC759",
            "#3C91E6",
            "#FF7B9C",
            "#06D6A0",
          ]}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <button type="button" className="button2" onClick={handleSpinClick}>
          Lancer <br />
          la Roue
        </button>
        <br />
        <div className="RandomResponse">
          {!mustSpin ? data[prizeNumber].option : ""}
        </div>
      </div>
    </div>
  );
}
