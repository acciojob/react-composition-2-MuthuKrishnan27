import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="model-overlay">
      <div className="model-content">
        <button className="model-close" onClick={onClose}>
          Close
        </button>
        <div className="model-p">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
