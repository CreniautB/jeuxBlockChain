import React from "react";

const ModalLogOut = ({ closeModal, closeCross }) => {
  function closerModal(e) {
    closeModal(false);
    e.target.parentElement.parentElement.classList.remove("activeBtn");
    document.querySelector(".logOutBtn").classList.remove("activeBtn");
  }
  return (
    <div className="modal">
      <div className="exitModal" onClick={(e) => closerModal(e)}>
        <img src={closeCross} alt="cross for close the modal"></img>
        <h1>IN PROCCES</h1>
      </div>
    </div>
  );
};

export default ModalLogOut;
