import React from "react";

const ModalLogOut = ({ closeModal, closeCross }) => {
  return (
    <div className="modal">
      <div className="exitModal" onClick={(e) => closeModal(false)}>
        <img src={closeCross}></img>
        <h1>IN PROCCES</h1>
      </div>
    </div>
  );
};

export default ModalLogOut;