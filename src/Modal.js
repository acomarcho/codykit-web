import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ state, dispatch }) => {
  return (
    <div className={`modal-overlay ${state.showModal ? "show-modal" : null}`}>
      <div className="modal-card">
        <button
          className="modal-close"
          onClick={() => dispatch({ type: "CLOSE_MODAL" })}
        >
          <FaTimes />
        </button>
        {state.showModal && state.img && (
          <img className="modal-img" src={state.img} alt="modal" />
        )}
        {state.showModal && !state.img && (
          <iframe
            src="https://drive.google.com/file/d/15U4XSHR-EVbliRUoPLL49TFPCKDQFiIX/preview"
            allow="autoplay"
            title="Arm Robot Demo"
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
