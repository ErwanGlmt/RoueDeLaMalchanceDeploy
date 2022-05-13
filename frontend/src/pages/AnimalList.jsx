import React from "react";
import { Link } from "react-router-dom";
import "../styles/AnimalList.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { datAnimal } from "../datas/datAnimal";

export default function AnimalList() {
  return (
    <>
      <Header />
      <div className="list-container">
        <p>Clique sur un animal pour voir sa description</p>
        <div className="animalwrapper">
          <Link to="/Animals/0">
            <img src={datAnimal[0].img.pandaRoux} alt="pandaRoux" />
          </Link>
          <Link to="/Animals/1">
            <img src={datAnimal[1].img.raieManta} alt="raieManta" />
          </Link>
          <Link to="/Animals/2">
            <img src={datAnimal[2].img.tortueLuth} alt="tortueLuth" />
          </Link>
          <Link to="/Animals/3">
            <img src={datAnimal[3].img.baleineBleue} alt="baleineBleue" />
          </Link>
          <Link to="/Animals/4">
            <img src={datAnimal[4].img.oursPolaire} alt="oursPolaire" />
          </Link>
          <Link to="/Animals/5">
            <img src={datAnimal[5].img.tigre} alt="tigre" />
          </Link>
          <Link to="/Animals/6">
            <img src={datAnimal[6].img.homme} alt="homme" />
          </Link>
          <Link to="/Animals/7">
            <img
              src={datAnimal[7].img.harfangDesNeiges}
              alt="harfangDesNeiges"
            />
          </Link>
          <Link to="/Animals/8">
            <img src={datAnimal[8].img.aigleImperial} alt="aigleImperial" />
          </Link>
          <Link to="/Animals/9">
            <img src={datAnimal[9].img.orangOutan} alt="orangOutan" />
          </Link>
        </div>
        <div className="listbutton">
          <Link to="/">
            <button type="button" className="listreturn">
              ↩
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
