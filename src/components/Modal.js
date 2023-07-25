import React from 'react';
import "../styles/App.css"
const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="model-overlay">
      <div className="model-content" onClick={onClose}>
        <button className="model-close" onClick={onClose}>
          Close
        </button>
        <div className="model p">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
