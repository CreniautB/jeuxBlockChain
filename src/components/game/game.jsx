import React, { useState } from "react";
import Map from "../map/map";
import "./game.css";

import ModalBuyFactory from "../modals/modalBuyFactory";
import ModalBuy from "../modals/modalBuy";
import ModalLogOut from "../modals/modalLogOut";
import closeCross from "../../assets/close.png";
import ModalBuyToken from "../modals/modalBuyToken";
import ModalAssoc from "../modals/modalAssoc";
import ModalRule from "../modals/modalRule";

const Game = () => {
  const [modalBuyFactory, setModalBuyFactory] = useState(false);
  const [modalBuy, setModalBuy] = useState(false);
  const [modalLogOut, setModalLogOut] = useState(false);
  const [modalBuyToken, setModalBuyToken] = useState(false);
  const [modalAssoc, setModalAssoc] = useState(false);
  const [modalRule, setModalRule] = useState(false);

  const [continentToBuy, setContinentToBuy] = useState("");
  return (
    <>
      <button className="btnDarkBlue buyBtn" onClick={() => setModalBuy(true)}>
        Buy
      </button>
      <div className="logoutContainer">
        <button className="btnDarkBlue" onClick={() => setModalBuyToken(true)}>
          Buy Token
        </button>
        <button className="btnDarkBlue" onClick={() => setModalLogOut(true)}>
          Log out
        </button>
      </div>
      <button
        className="btnDarkBlue ruleBtn"
        onClick={() => setModalRule(true)}
      >
        Rule
      </button>
      <button
        className="btnDarkBlue assocBtn"
        onClick={() => setModalAssoc(true)}
      >
        Association
      </button>
      <div className="mainTitle">
        <h1>TITLE</h1>
        <p>Time until the end 00:10:00</p>
      </div>
      <div className="titleBottom">
        <p>Balance : 10 tokens</p>
        <p>
          solar panel : 3 tokens/day <span></span>wind turbine : 4 tokens/day
        </p>
      </div>

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
        <ModalAssoc closeModal={setModalAssoc} closeCross={closeCross} />
      ) : null}
      {modalRule ? (
        <ModalRule closeModal={setModalRule} closeCross={closeCross} />
      ) : null}

      {modalBuyFactory ? (
        <ModalBuyFactory
          continentToBuy={continentToBuy}
          closeModal={setModalBuyFactory}
          closeCross={closeCross}
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
