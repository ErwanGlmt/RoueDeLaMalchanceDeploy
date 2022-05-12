import React from "react";
import { useParams } from "react-router-dom";
import { datAnimal } from "../datas/datAnimal";

export default function Animals() {
  const { id } = useParams();

  return (
    <div className="animal">
      <div className="animal-header">
        <div className="animal-img">
          <img src={datAnimal[id].img} alt="animal" />
        </div>
      </div>
      <div className="animal-body">
        <h2 className="animal-title">{datAnimal[id].name}</h2>
        <p className="animal-description">{datAnimal[id].desc}</p>
        <img src={datAnimal[id].imgUICN} alt="imageUICN" />
        <p className="animal-extinction">{datAnimal[id].ext}</p>
      </div>
    </div>
  );
}
