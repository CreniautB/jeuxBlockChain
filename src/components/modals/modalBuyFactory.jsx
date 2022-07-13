import React from "react";
import "./modal.css";

import pictogramWind from "../../assets/pictogram/black/pictogramWind.png";
import pictogramGas from "../../assets/pictogram/black/pictogramGas.png";
import pictogramSun from "../../assets/pictogram/black/pictogramSun.png";

const ModalBuyFactory = ({
  continentToBuy,
  closeModal,
  closeCross,
  setContinentToBuy,
}) => {
  function closerModal(e) {
    closeModal(false);
    e.target.parentElement.parentElement.classList.remove("activeBtn");
    document.querySelector(".buyBtn").classList.remove("activeBtn");
  }

  function selectContinent(e) {
    console.log(e);
    setContinentToBuy(e.target.dataset.continent);
  }

  function confirmBuy(e) {
    console.log(continentToBuy);
  }

  return (
    <div className="modalFactoryContainer modal">
      <div className="exitModal" onClick={(e) => closerModal(e)}>
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
        {continentToBuy === "all" ? (
          <div className="chooseAContinent">
            <h4>Choose a continent</h4>
            <div div className="continentContainer">
              <button
                data-continent="europe"
                className="modalButtonLight"
                onClick={(e) => selectContinent(e)}
              >
                Europe
              </button>
              <button
                data-continent="asia"
                className="modalButtonLight"
                onClick={(e) => selectContinent(e)}
              >
                Asia
              </button>
              <button
                data-continent="africa"
                className="modalButtonLight"
                onClick={(e) => selectContinent(e)}
              >
                Africa
              </button>
              <button
                data-continent="southAmerica"
                className="modalButtonLight"
                onClick={(e) => selectContinent(e)}
              >
                South America
              </button>
              <button
                data-continent="oceania"
                className="modalButtonLight"
                onClick={(e) => selectContinent(e)}
              >
                Oceania
              </button>
              <button
                data-continent="northAmerica"
                className="modalButtonLight"
                onClick={(e) => selectContinent(e)}
              >
                North America
              </button>
            </div>
          </div>
        ) : (
          <>
            <h3>Selected Continent</h3>
            <button className="modalButtonLight">{continentToBuy}</button>
          </>
        )}
      </div>

      <div className="btnCenterContainer">
        <button className="modalButtonLight" onClick={(e) => confirmBuy(e)}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ModalBuyFactory;
