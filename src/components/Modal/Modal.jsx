import React, { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ isOpen, imageUrl, alt, onClose }) => {
  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  return (
    <div
      className={`${css.overlay} ${isOpen ? 'open' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className={css.modal}>
        <img src={imageUrl} alt={alt} />
      </div>
    </div>
  );
};
