import React, { useContext } from 'react';
import { PopUpContext } from './PopUpContext';

export function PopUp() {
  const { popUpActive, hidePopUp } = useContext(PopUpContext);

  if (!popUpActive) {
    return null;
  }

  return (
    <div className="popup">
      <h2>Pop-up activado</h2>
      <button onClick={hidePopUp}>Cerrar</button>
    </div>
  );
};