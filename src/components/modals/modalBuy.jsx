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
        <img src={closeCross} alt="cross for close the modal"></img>
        <h1>IN PROCESS</h1>
      </div>
    </div>
  );
};

export default ModalBuy;
