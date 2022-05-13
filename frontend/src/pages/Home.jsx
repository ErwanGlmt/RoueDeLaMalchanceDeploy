import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import terre from "@assets/terre.jpg";

const data = [
  { id: 0, option: "🐼", name: "pandaRoux" },
  { id: 1, option: "🐠", name: "RaieManta" },
  { id: 2, option: "🐢", name: "tortueLuth" },
  { id: 3, option: "🐳", name: "baleineBleue" },
  { id: 4, option: "🐻‍❄️", name: "oursPolaire" },
  { id: 5, option: "🐯", name: "tigre" },
  { id: 6, option: "❓", name: "homme" },
  { id: 7, option: "🦉", name: "harfangDesNeiges" },
  { id: 8, option: "🦅", name: "aigleImperial" },
  { id: 9, option: "🦧", name: "orangOutan" },
];

export default function Home() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [icon, setIcon] = useState("❔");
  const [animate, setAnimate] = useState(false);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 500);
  };

  const onStopSpinning = () => {
    setIcon(data[prizeNumber].option);
    setMustSpin(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${terre})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div align="center">
        <h1 align="center">La Roue de la Malchance</h1>
        <div className="conteneur">
          <Wheel
            onStopSpinning={onStopSpinning}
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            outerBorderColor={["#E24A2B"]}
            outerBorderWidth={[5]}
            innerBorderColor={["#f2f2f2"]}
            radiusLineColor={["#dedede"]}
            radiusLineWidth={[2]}
            textColors={["#ffffff"]}
            fontSize={[50]}
            perpendicularText={[true]}
            backgroundColors={[
              "#7353BA",
              "#FFC759",
              "#3C91E6",
              "#FF7B9C",
              "#06D6A0",
            ]}
            spinDuration={0.2}
          />
          <div className="petit-conteneur">
            <button type="button" className="button2" onClick={handleSpinClick}>
              Lancer
              <br />
              la Roue
            </button>
            <br />
            <div className="RandomResponse">
              <Link to={`/Animals/${data[prizeNumber].id}`}>
                <p className={`iconResponse ${animate ? "animate" : ""}`}>
                  {!mustSpin ? icon : "❔"}
                </p>
                {icon === "❔" ? (
                  ""
                ) : (
                  <p className="font">{mustSpin ? "" : "Clique sur moi"}</p>
                )}
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Link to="/AnimalList">
            <div className="listdiv">
              <button type="button" className="buttonlist">
                Acceder a la liste de tous les animaux
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
