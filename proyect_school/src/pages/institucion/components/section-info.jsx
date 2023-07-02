import React, { useContext } from "react";
import { PopUpContext } from '../../../contexts/contextos/PopUpContext';

/* Styles */
import './section-info.scss'

export function SectionInfo({ tittle, contentInfo }) {
  const { closePopup } = useContext(PopUpContext);

  const handleClosePopup = () => {
    closePopup();
  };

  return (
    <section id="institution_popUpInfo">
      <header>
        <h1>
          {tittle}
        </h1>
        <button onClick={handleClosePopup}>
          <i className="fi fi-rr-cross"></i>
        </button>
      </header>
      <section className="institution_popUpInfo_content">
        {contentInfo.map((elem, index) => (
          <article key={"institution_popUpInfo_content" + index}>
            <h1>{elem.tittle}</h1>

            <p>
              {elem.content}
            </p>

            <img src={elem.image} alt={elem.tittle + "_img"} />
          </article>
        ))}
      </section>
    </section>
  );
}