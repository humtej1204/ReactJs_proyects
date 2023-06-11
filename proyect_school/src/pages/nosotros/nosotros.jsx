import React, { useState } from "react";


/* Styles */
import './nosotros.scss';

/* Images */
import IMG01 from '../../assets/imgs/home/IMG01.jpg';
import whoWeAre from '../../assets/imgs/nosotros/IMG05_3.png';

/* Info */
import { servicesData } from "./nosotros-info";

export function Nosotros() {
  const [animate, setAnimate] = useState(false);
  const [selectData, setSelectData] = useState(servicesData[0]);

  const handleSelectElem = (data) => {
    setAnimate(false);
    setSelectData(data);
    
    setTimeout(() => {
      setAnimate(true);
    }, 1);
  }

  return (
    <main id="nosotros-sect">
      <section id="nosotros-main_sect">
        <div className="banner_overlay">
          Puntualidad<br />
          Disciplina<br />
          Estudio
        </div>
        <img src={IMG01} alt="school" />
      </section>

      <section className="nosotros-container">
        <article id="nosotros-info_whoWeAre">
          <div className="nosotros-info_leftSect">
            <h1>¿Quiénes somos?</h1>

            <p>
              Maecenas quis elit a leo sollicitudin auctor. Morbi a lobortis enim. Vestibulum ante tortor, malesuada eget commodo eget, hendrerit vel tellus. Suspendisse ultrices augue ut tellus ultrices, iaculis porttitor eros bibendum. Vivamus magna nunc, viverra at commodo in, mollis sed lectus. Sed tincidunt turpis odio, quis scelerisque dolor sollicitudin nec. Aliquam et justo et ex pretium vestibulum eu eget neque. Nam sollicitudin leo quis risus vehicula aliquam. Phasellus non enim magna.
            </p>
          </div>

          <div className="image_container">
            <img src={whoWeAre} alt="" />
          </div>
        </article>

        <article id="nosotros-info_whyWe">
          <div className="left-section">
            <h1>¿Por qué elejirnos?</h1>
            <p>
              Maecenas quis elit a leo sollicitudin auctor. Morbi a lobortis enim. Vestibulum ante tortor, malesuada eget commodo eget, hendrerit vel tellus. Suspendisse ultrices augue ut tellus ultrices, iaculis porttitor eros bibendum. Vivamus magna nunc, viverra at commodo in, mollis sed lectus.
            </p>
          </div>

          <div className="right-section">
            {reazons.map((elem, index) => (
              <div className="reazon-elem" key={'reazon_' + index}>
                <h3>{elem.tittle}</h3>
                <p>{elem.reazon}</p>
              </div>
            ))}
          </div>
        </article>

        <article id="nosotros-services_sect">
          <h1>
            Programas y Servicios que ofrecemos a los Alumnos
          </h1>

          <div className="container_selector">
            <div className={`selected_elem ${animate?('fadeLeft'):('')}`}>
              <img src={selectData.image} alt="" />
              <div className="selected_elem-container">
                <h3>Profesores a cargo:</h3>
                <span>
                  {selectData.inCharge}
                </span>

                <h2>{selectData.service}</h2>
                <p>
                  {selectData.description}
                </p>
              </div>
            </div>

            <div className="elem-container">
              {servicesData.map((elem, index) => (
                  <div className={`elem ${(elem.id === selectData.id)?('elem_active'):('')}`}
                  key={"serviceElem_" + index}
                  onClick={() => handleSelectElem(elem)}>
                    <img src={elem.image} alt="" />
                  
                    <div className="elem_content">
                      <h3>{elem.service}</h3>
                      <p>
                        {elem.shortDescription}
                      </p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

const reazons = [
  {
    tittle: 'Razon número uno',
    reazon: 'Maecenas quis elit a leo sollicitudin auctor. Morbi a lobortis enim. Vestibulum ante tortor, malesuada eget commodo eget, hendrerit vel tellus.'
  },
  {
    tittle: 'Razon número dos',
    reazon: 'Pellentesque tempor metus a odio sollicitudin, ac condimentum nunc tincidunt. Nam eu magna aliquet est malesuada laoreet in at turpis.'
  },
  {
    tittle: 'Razon número tres',
    reazon: 'Pellentesque tempor metus a odio sollicitudin, ac condimentum nunc tincidunt. Nam eu magna aliquet est malesuada laoreet in at turpis.'
  },
  {
    tittle: 'Razon número cuatro',
    reazon: 'Pellentesque tempor metus a odio sollicitudin, ac condimentum nunc tincidunt. Nam eu magna aliquet est malesuada laoreet in at turpis.'
  },
]