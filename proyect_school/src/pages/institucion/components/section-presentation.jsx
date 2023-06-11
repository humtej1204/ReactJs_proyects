import React, { useContext } from "react";
import { PopUpContext } from '../../../contexts/contextos/PopUpContext';


/* Components */
import { SectionInfo } from "./section-info";

/* Styles */
import './section-presentation.scss'

export function SectionPresentation({ content }) {
  const { openPopup } = useContext(PopUpContext);
  const { tittle, main_content, main_image, content_info } = content;

  const handleOpenPopup = () => {
    openPopup(<SectionInfo tittle={tittle} contentInfo={content_info} />);
  };

  return (
    <section className="full-window bg-sect"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.25)), url(${main_image})` }}>
      <div className="insti-sec-content item-section">
        <h1>
          <span>{tittle}</span>
        </h1>

        <p>
          {main_content}
        </p>

        <button onClick={handleOpenPopup}>
          Mas información
          <i className="fi fi-rr-document"></i>
        </button>
      </div>
    </section>
  );
}