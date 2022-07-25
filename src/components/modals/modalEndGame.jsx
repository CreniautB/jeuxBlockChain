import React from "react";
import { useEffect, useState } from "react";

const ModalEndGame = () => {
  const [newGameDate, setNewGameDate] = useState("");

  useEffect(() => {
    setNewGameDate("2023-09-17 10:34:20");
  }, []);

  return (
    <div className="endGameModal">
      <div className="modalContentEndGame">
        <div className="contentEndGame">
          <h1>END GAME</h1>
          <h2>Winner : WINNING TOKENS </h2>
          <h2>You win : TOTAL TOKEN WINS</h2>
          <h2>New Game At : {newGameDate}</h2>
        </div>
      </div>
    </div>
  );
};

export default ModalEndGame;
