import React from "react";
import { Link, useParams } from "react-router-dom";
import { datAnimal } from "../datas/datAnimal";
import "../styles/Animals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Animals() {
  const { id } = useParams();

  return (
    <>
      <Header />
      <div className="animal">
        <div className="animal-header">
          <img
            className="animal-img"
            src={datAnimal[id].img[datAnimal[id].code]}
            alt={datAnimal[id].code}
          />
        </div>
        <div className="animal-body">
          <h2 className="animal-title">{datAnimal[id].name}</h2>
          <h3>Description</h3>
          <p className="animal-description">{datAnimal[id].desc}</p>
          <h4>Où est-il ?</h4>
          <p className="animal-location">{datAnimal[id].distribution}</p>
          <h3>Statut de conservation de UICN</h3>
          <img
            className="UICNimg"
            src={datAnimal[id].imgUICN[datAnimal[id].toto]}
            alt={datAnimal[id].code}
          />
          <h3>De quoi est-il menacé ?</h3>
          <p className="animal-extinction">{datAnimal[id].ext}</p>
        </div>
        <div className="returnbutton">
          <Link to="/">
            <button type="button" className="animal-emoji">
              ⏪{datAnimal[id].emoji}
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
