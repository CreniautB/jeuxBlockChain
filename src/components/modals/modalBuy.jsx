import React from "react";

const ModalBuy = ({ closeModal, closeCross }) => {
  function closerModal(e) {
    closeModal(false);
    e.target.parentElement.parentElement.classList.remove("activeBtn");
    document.querySelector(".buyBtn").classList.remove("activeBtn");
  }
  return (
    <div className="modal">
      <div className="exitModal" onClick={(e) => closerModal(e)}>
        <img src={closeCross}></img>
        <h1>IN PROCCES</h1>
      </div>
    </div>
  );
};

export default ModalBuy;
