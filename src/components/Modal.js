import React, { useRef } from 'react';

const Modal = ({ show, onClose, children }) => {
  const modalRef = useRef(null);

  const handleOverlayClick = (event) => {
    if (event.target === modalRef.current) {
      onClose();
    }
  };

  const handleCloseClick = () => {
    onClose();
  };

  return show ? (
    <div className="model-overlay" ref={modalRef} onClick={handleOverlayClick}>
      <div className="model-content">
        <button className="model-close" onClick={handleCloseClick}>
          Close
        </button>
        <div className="model p">{children}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;
