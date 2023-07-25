import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="model-overlay">
        <button className="model close" onClick={onClose}>
          Close
        </button>
        <div className="model p">{children}</div>
    </div>
  );
};

export default Modal;
