import React from "react";
import "./modal.css";

import pictogramWind from "../../assets/pictogram/black/pictogramWind.png";
import pictogramGas from "../../assets/pictogram/black/pictogramGas.png";
import pictogramSun from "../../assets/pictogram/black/pictogramSun.png";

const ModalBuyFactory = ({ continentToBuy, closeModal, closeCross }) => {
  return (
    <div className="modalFactoryContainer modal">
      <div className="exitModal" onClick={() => closeModal(false)}>
        <img src={closeCross} alt="" />
      </div>
      <div className="modalFactoryHeader">
        <button className="modalButtonDark">Convert a factory</button>
        <button className="modalButtonLight">Add a new factory</button>
      </div>
      <h3>Choose a unit</h3>
      <div className="pictogramContainerModalBuy">
        <div className="pictogramModalBuy">
          <img src={pictogramGas}></img>
          <div className="descBuyPictogram">
            <div>PRICE</div>
            <div>E</div>
            <div>P</div>
          </div>
        </div>
        <div className="pictogramModalBuy">
          <img src={pictogramWind}></img>
          <div className="descBuyPictogram">
            <div>PRICE</div>
            <div>E</div>
            <div>P</div>
          </div>
        </div>
        <div className="pictogramModalBuy">
          <img src={pictogramSun}></img>
          <div className="descBuyPictogram">
            <div>PRICE</div>
            <div>E</div>
            <div>P</div>
          </div>
        </div>
      </div>

      <div className="continentChooseModalBuy">
        <h3>Choose a continent</h3>
        <div>
          <button className="modalButtonLight">{continentToBuy}</button>
        </div>
      </div>
      <div className="btnCenterContainer">
        <button className="modalButtonLight">Confirm</button>
      </div>
    </div>
  );
};

export default ModalBuyFactory;
