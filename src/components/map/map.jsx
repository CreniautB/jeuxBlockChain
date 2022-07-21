import React, { useState } from "react";
import "./map.css";
import InfoFactory from "../infoFactory/infoFactory";

const Map = ({ setContinentToBuy, setModalBuyFactory }) => {
  function handleClickToInfo(continent) {
    setContinentToBuy(continent);
    setModalBuyFactory(true);
  }

  const [advantage, setAdvantage] = useState("asia");

  return (
    <div className="worldMap">
      <InfoFactory
        continent="africa"
        handleClickToInfo={handleClickToInfo}
        advantage={advantage}
      />
      <InfoFactory
        continent="asia"
        handleClickToInfo={handleClickToInfo}
        advantage={advantage}
      />
      <InfoFactory
        continent="southAmerica"
        handleClickToInfo={handleClickToInfo}
        advantage={advantage}
      />
      <InfoFactory
        continent="northAmerica"
        handleClickToInfo={handleClickToInfo}
        advantage={advantage}
      />
      <InfoFactory
        continent="europe"
        handleClickToInfo={handleClickToInfo}
        advantage={advantage}
      />
      <InfoFactory
        continent="oceania"
        handleClickToInfo={handleClickToInfo}
        advantage={advantage}
      />
    </div>
  );
};

export default Map;
