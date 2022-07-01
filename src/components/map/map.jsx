import React, { useState } from "react";
import "./map.css";
import InfoFactory from "../infoFactory/infoFactory";

const Map = ({ setContinentToBuy, setModalBuyFactory }) => {
  function handleClickToInfo(continent) {
    setContinentToBuy(continent);
    setModalBuyFactory(true);
  }

  return (
    <div className="worldMap">
      <InfoFactory continent="africa" handleClickToInfo={handleClickToInfo} />
      <InfoFactory continent="asia" handleClickToInfo={handleClickToInfo} />
      <InfoFactory
        continent="southAmerica"
        handleClickToInfo={handleClickToInfo}
      />
      <InfoFactory
        continent="northAmerica"
        handleClickToInfo={handleClickToInfo}
      />
      <InfoFactory continent="europe" handleClickToInfo={handleClickToInfo} />
      <InfoFactory continent="oceania" handleClickToInfo={handleClickToInfo} />
    </div>
  );
};

export default Map;
