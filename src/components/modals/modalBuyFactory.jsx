import React from "react";
import "./modal.css";

import pictogramWind from "../../assets/pictogram/black/pictogramWind.png";
import pictogramGas from "../../assets/pictogram/black/pictogramGas.png";
import pictogramSun from "../../assets/pictogram/black/pictogramSun.png";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const ModalBuyFactory = ({
  continentToBuy,
  closeModal,
  closeCross,
  setContinentToBuy,
}) => {
  const [role, setRole] = useState();
  const [whichPower, setWhichPower] = useState();
  const confirmBtn = useRef();

  useEffect(() => {
    if (continentToBuy && role && whichPower) {
      confirmBtn.current.classList.remove("disableConfirmBtn");
    }
  }, [role, whichPower, continentToBuy]);

  function showContinentMenu(e) {
    document.querySelectorAll(".continentToSelect").forEach((elem) => {
      elem.classList.remove("continentToSelect");
    });
  }

  function closerModal(e) {
    closeModal(false);
    e.target.parentElement.parentElement.classList.remove("activeBtn");
    document.querySelector(".buyBtn").classList.remove("activeBtn");
  }

  function selectContinent(e) {
    setContinentToBuy(e.target.dataset.continent);
  }

  function clickOnPictogramBuy(e, power) {
    setWhichPower(e.target.dataset.power);
    document.querySelectorAll(".pictogramModalBuy").forEach((elem) => {
      elem.classList.remove("activePower");
    });
    document.querySelector(`.${power}`).classList.add("activePower");
  }

  function convertOrAdd(e) {
    setRole(e.target.dataset.role);
    document.querySelectorAll(".roleBtn").forEach((elem) => {
      elem.classList.remove("selectedRole");
    });
    e.target.classList.add("selectedRole");
  }

  function displayContinentToSelect(e) {
    setContinentToBuy("all");
    document.querySelectorAll(".continentToSelect").forEach((elem) => {
      elem.classList.remove("continentToSelect");
    });
  }

  function confirmBuy(e) {
    if (
      role !== undefined &&
      continentToBuy !== undefined &&
      whichPower !== undefined
    ) {
      alert(role + " " + continentToBuy + " " + whichPower);
    }
  }

  return (
    <div className="modalFactoryContainer modal">
      <div className="exitModal" onClick={(e) => closerModal(e)}>
        <img src={closeCross} alt="" />
      </div>
      <div className="modalFactoryHeader">
        <button
          className="modalButtonLight roleBtn"
          data-role="convert"
          onClick={(e) => convertOrAdd(e)}
        >
          {" "}
          Convert a factory
        </button>
        <button
          className="modalButtonLight roleBtn"
          data-role="add"
          onClick={(e) => convertOrAdd(e)}
        >
          Add a new factory
        </button>
      </div>
      <h3>Choose a unit</h3>
      <div className="pictogramContainerModalBuy">
        <div
          className="pictogramModalBuy Gas"
          onClick={(e) => clickOnPictogramBuy(e, "Gas")}
          data-power="Gas"
        >
          <img src={pictogramGas}></img>
          <div className="descBuyPictogram">
            <div>PRICE</div>
            <div>E</div>
            <div>P</div>
          </div>
        </div>
        <div
          className="pictogramModalBuy  Wind"
          onClick={(e) => clickOnPictogramBuy(e, "Wind")}
          data-power="Wind"
        >
          <img src={pictogramWind}></img>
          <div className="descBuyPictogram">
            <div>PRICE</div>
            <div>E</div>
            <div>P</div>
          </div>
        </div>
        <div
          className="pictogramModalBuy Sun "
          onClick={(e) => clickOnPictogramBuy(e, "Sun")}
          data-power="Sun"
        >
          <img src={pictogramSun}></img>
          <div className="descBuyPictogram">
            <div>PRICE</div>
            <div>E</div>
            <div>P</div>
          </div>
        </div>
      </div>

      {continentToBuy === "all" ? (
        <div className="chooseAContinent">
          <h3>Choose a continent</h3>
          <div div className="continentContainer">
            <button onClick={(e) => showContinentMenu(e)}>
              Select Continent
            </button>
            <button
              data-continent="europe"
              onClick={(e) => selectContinent(e)}
              className="continentToSelect"
            >
              Europe
            </button>
            <button
              data-continent="asia"
              onClick={(e) => selectContinent(e)}
              className="continentToSelect"
            >
              Asia
            </button>
            <button
              data-continent="africa"
              onClick={(e) => selectContinent(e)}
              className="continentToSelect"
            >
              Africa
            </button>
            <button
              data-continent="southAmerica"
              onClick={(e) => selectContinent(e)}
              className="continentToSelect"
            >
              South America
            </button>
            <button
              data-continent="oceania"
              onClick={(e) => selectContinent(e)}
              className="continentToSelect"
            >
              Oceania
            </button>
            <button
              data-continent="northAmerica"
              onClick={(e) => selectContinent(e)}
              className="continentToSelect"
            >
              North America
            </button>
          </div>
        </div>
      ) : (
        <div className="continentChooseModalBuy">
          <h3>Choose a continent</h3>
          <button
            className="modalButtonLight"
            onClick={(e) => displayContinentToSelect(e)}
          >
            {continentToBuy}
          </button>
        </div>
      )}

      <div className="btnCenterContainer">
        <button
          ref={confirmBtn}
          className="modalButtonLight disableConfirmBtn"
          onClick={(e) => confirmBuy(e)}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ModalBuyFactory;
