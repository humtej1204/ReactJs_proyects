import React, { createContext, useState } from 'react';

import './PopUpContext.scss';

const PopUpContext = createContext();

const PopUpProvider = ({ children }) => {
  const [popupContent, setPopupContent] = useState(null);

  const openPopup = (content) => {
    setPopupContent(prevPopUps => (!prevPopUps)?
    ([content]):
    [...prevPopUps, content]);

    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setPopupContent(prevPopUps => {
      const currentPopUps = [...prevPopUps];
      currentPopUps.pop();

      return currentPopUps;
    });

    document.body.style.overflow = 'auto';
  };

  return (
    <PopUpContext.Provider value={{ openPopup, closePopup }}>
      {children}
      {(popupContent && popupContent.length > 0)?
      (popupContent.map((content, index) => (
        <div key={'popUp_' + index} className="popUp_backdrop"
        style={{zIndex: 100000 + index}}>
          {content}
        </div>
      ))):
      (null)}
    </PopUpContext.Provider>
  );
}

export { PopUpContext, PopUpProvider };