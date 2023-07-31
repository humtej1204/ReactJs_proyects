import React, {
  useState, useEffect
} from "react";
import { useScrollAnimation } from "../../util/useScrollAnimation";
import { useSwipeAnimation } from "../../util/useSwipeAnimation";

/* Components */
import { SectionPresentation } from "./components/section-presentation";
import { SectionNavigator } from "./components/section-navigator";

/* Info */
import { sectionData } from "./section-data"

/* Styles */
import './institucion.scss'

/* Images */
import main_sect from '../../assets/imgs/institucion/main_sect.png'
import separator from '../../assets/imgs/institucion/separator.png'

export function Institucion() {
  const sectionRef = "institution-section";
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideIndexInScroll, setSlideIndexInScroll] = useScrollAnimation(sectionRef, slideIndex, sectionData.length);
  const [slideIndexInSwipe, setSlideIndexInSwipe] = useSwipeAnimation(sectionRef, slideIndex, sectionData.length);

  useEffect(() => {
    setSlideIndex(slideIndexInScroll);
  }, [slideIndexInScroll, setSlideIndexInScroll]);

  useEffect(() => {
    setSlideIndex(slideIndexInSwipe);
  }, [slideIndexInSwipe, setSlideIndexInSwipe]);

  useEffect(() => {
    if (document.getElementById("main-footer")) {
      document.getElementById("main-footer").style.display = "none";
    } else {
      document.getElementById('main-footer').style.display = 'flex';
    }

    return () => {
      document.getElementById("main-footer").style.display = "flex";
    };
  });

  const handleNextSection = () => {
    let newIndex = (slideIndex === sectionData.length)?(0):(slideIndex + 1);

    setSlideIndex(newIndex);
  }

  const handleDatosHijo = (datos) => {
    setSlideIndex(datos);
  };

  return (
    <main id="institution-section">
      <SectionNavigator 
        tittles={sectionData.map(elem => elem.tittle)}
        currentIndex={slideIndex}
        changeIndex={handleDatosHijo}
      />

      <div className="swipper-inner"
      style={{ transform: `translateY(calc((100vh - var(--header-height)) * ${-slideIndex}))`}}>
        
        <section className="full-window bg-sect" style={{ backgroundImage: `url(${main_sect})` }}>
          <div className="insti-sec-content main-section">
            <h1>Alfredo Rebaza Acosta</h1>
            <img className="img-separator" src={separator} alt="beautifull-separator" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper ac nisl vel bibendum. Mauris dolor urna, fringilla quis magna in, condimentum dictum arcu. Sed et elit ornare, consequat felis a, rutrum quam. Praesent lacinia lacus at sapien dictum, sed dapibus magna volutpat. Sed lacinia et tellus nec posuere. Nam pellentesque fringilla purus vel condimentum. Cras aliquam sollicitudin orci ut pharetra. Morbi eu leo eget nisi viverra lobortis at in turpis.
            </p>
          </div>
        </section>

        {sectionData.map((elem,index) => (
          <SectionPresentation
          content={elem}
          key={index} />
        ))}
      </div>

      <button className="nextInstitutionSect_btn"
      onClick={handleNextSection}>
        <i className="fi fi-sr-angle-small-down"></i>
      </button>
    </main>
  );
}