import React from "react";
import pictogramWind from "../../assets/pictogram/pictogramWind.png";
import pictogramGas from "../../assets/pictogram/pictogramGas.png";
import pictogramSun from "../../assets/pictogram/pictogramSun.png";

import crown from "../../assets/pictogram/crown.png";

import "./infoFactory.css";

const InfoFactory = ({ continent, handleClickToInfo, advantage }) => {
  return (
    <div
      className={`infoFactoryContainer ${continent} `}
      onClick={(e) => handleClickToInfo(continent)}
    >
      {advantage === continent ? (
        <div className="crown">
          <img src={crown} alt="" />
        </div>
      ) : null}
      <h3>1000E - 1000P</h3>
      <div className="pictogramInfoContent">
        <img className="pictogramInfoImg" src={pictogramGas} alt="" />
        <div className="infoNumFactory">12</div>
      </div>
      <div className="pictogramInfoContent">
        <img className="pictogramInfoImg" src={pictogramWind} alt="" />
        <div className="infoNumFactory">8</div>
      </div>
      <div className="pictogramInfoContent">
        <img className="pictogramInfoImg" src={pictogramSun} alt="" />
        <div className="infoNumFactory">14</div>
      </div>
    </div>
  );
};

export default InfoFactory;
