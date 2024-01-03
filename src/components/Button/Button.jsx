import React from 'react';
import css from './Button.module.css';

export const Button = ({ onClick, disabled }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
      }}
    >
      <button
        type="button"
        className={css.Button}
        onClick={onClick}
        disabled={disabled}
      >
        Load more
      </button>
    </div>
  );
};
