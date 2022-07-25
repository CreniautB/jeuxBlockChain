import React, { useState } from "react";
import Timer from "./timer/timer";
import Map from "../map/map";
import "./game.css";

import ModalBuyFactory from "../modals/modalBuyFactory";
import ModalBuy from "../modals/modalBuy";
import ModalLogOut from "../modals/modalLogOut";
import closeCross from "../../assets/close.png";
import ModalBuyToken from "../modals/modalBuyToken";
import ModalAssoc from "../modals/modalAssoc";
import ModalRule from "../modals/modalRule";
import ModalEndGame from "../modals/modalEndGame";

const Game = () => {
  const [modalBuyFactory, setModalBuyFactory] = useState(false);
  const [modalBuy, setModalBuy] = useState(false);
  const [modalLogOut, setModalLogOut] = useState(false);
  const [modalBuyToken, setModalBuyToken] = useState(false);
  const [modalAssoc, setModalAssoc] = useState(false);
  const [modalRule, setModalRule] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [continentToBuy, setContinentToBuy] = useState();
  const [lang, setLang] = useState("en");

  function openAModale(e, whichModal) {
    whichModal(true);
    e.target.classList.add("activeBtn");
  }

  function openModalBuyFactory(e) {
    openAModale(e, setModalBuyFactory);
    setContinentToBuy("all");
  }

  return (
    <>
      <button
        className="btnDarkBlue simulateEndGame"
        onClick={() => setEndGame(true)}
      >
        Simulate End Game
      </button>
      <button
        className="btnDarkBlue buyBtn"
        onClick={(e) => openModalBuyFactory(e)}
      >
        Buy
      </button>
      <div className="logoutContainer">
        <button
          className="btnDarkBlue buyTokenBtn "
          onClick={(e) => openAModale(e, setModalBuyToken)}
        >
          Buy Token
        </button>
        <button
          className="btnDarkBlue logOutBtn "
          onClick={(e) => openAModale(e, setModalLogOut)}
        >
          Log out
        </button>
      </div>
      <button
        className="btnDarkBlue ruleBtn"
        onClick={(e) => openAModale(e, setModalRule)}
      >
        Rule
      </button>
      <button
        className="btnDarkBlue assocBtn"
        onClick={(e) => openAModale(e, setModalAssoc)}
      >
        Association
      </button>
      <div className="mainTitle">
        <h1>TITLE</h1>

        <div>
          <Timer setEndGame={setEndGame} />
        </div>
      </div>
      <div className="titleBottom">
        <p>Balance : 10 tokens</p>
        <p>
          solar panel : 3 tokens/day <span></span>wind turbine : 4 tokens/day
        </p>
      </div>
      {endGame ? <ModalEndGame /> : null}
      {modalBuy ? (
        <ModalBuy closeModal={setModalBuy} closeCross={closeCross} />
      ) : null}
      {modalBuyToken ? (
        <ModalBuyToken closeModal={setModalBuyToken} closeCross={closeCross} />
      ) : null}
      {modalLogOut ? (
        <ModalLogOut closeModal={setModalLogOut} closeCross={closeCross} />
      ) : null}
      {modalAssoc ? (
        <ModalAssoc
          closeModal={setModalAssoc}
          closeCross={closeCross}
          lang={lang}
        />
      ) : null}
      {modalRule ? (
        <ModalRule
          closeModal={setModalRule}
          closeCross={closeCross}
          lang={lang}
          setLang={setLang}
        />
      ) : null}

      {modalBuyFactory ? (
        <ModalBuyFactory
          continentToBuy={continentToBuy}
          closeModal={setModalBuyFactory}
          closeCross={closeCross}
          setContinentToBuy={setContinentToBuy}
        />
      ) : null}
      <Map
        setContinentToBuy={setContinentToBuy}
        setModalBuyFactory={setModalBuyFactory}
      />
    </>
  );
};

export default Game;
