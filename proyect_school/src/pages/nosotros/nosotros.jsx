import React, { useState } from "react";

/* Components */
import {BannerOverlay} from './components/BannerOverlay';

/* Styles */
import './nosotros.scss';
import './ExpansibleReazon.scss';

/* Images */
import whoWeAre from '../../assets/imgs/nosotros/IMG05_3.png';

/* Info */
import { servicesData } from "./nosotros-info";

function ExpansibleReazon({data}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    const expand = !expanded;
    setExpanded(expand);
  }

  return (
    <div id="reazon_elem"
    onClick={handleExpand}>
      <header>
        <h3>{data.tittle}</h3>
        <button className="expand_btn">
          {(expanded)?
            (<i className="fi fi-rr-angle-small-up"></i>):
            (<i className="fi fi-rr-angle-small-down"></i>)
          }
        </button>
      </header>

      {expanded && <p>{data.content}</p>}
    </div>
  );
}

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
      <section className="nosotros-main_sect">
        <BannerOverlay />
      </section>

      <section className="nosotros_whoWeAre">
        <article className="whoWeAre_container container_responsive">
          <div className="whoWeAre_leftSect">
            <h1>Quiénes somos</h1>

            <h2>
              Un Legado de Excelencia
            </h2>

            <p>
              Maecenas quis elit a leo sollicitudin auctor. Morbi a lobortis enim. Vestibulum ante tortor, malesuada eget commodo eget, hendrerit vel tellus. Suspendisse ultrices augue ut tellus ultrices, iaculis porttitor eros bibendum. Vivamus magna nunc, viverra at commodo in, mollis sed lectus.
            </p>
          </div>

          <div className="whoWeAre_imgCont">
            <img src={whoWeAre} alt="" />
          </div>
        </article>
      </section>

      <section className="nosotros_whyWe">
        <div className="whyWe_container container_responsive">
          <article className="whyWe_leftSect">
            <h1>Elige Excelencia<br />Educativa</h1>
            <p>
              Maecenas quis elit a leo sollicitudin auctor. Morbi a lobortis enim. Vestibulum ante tortor, malesuada eget commodo eget, hendrerit vel tellus. Suspendisse ultrices augue ut tellus ultrices, iaculis porttitor eros bibendum. Vivamus magna nunc, viverra at commodo in, mollis sed lectus.
            </p>
            <button>
              
            </button>
          </article>

          <div className="whyWe_rightSect">
            {reazons.map((elem, index) => (
              <ExpansibleReazon
              data={elem}
              key={'reazon_' + index} />
            ))}
          </div>
        </div>
      </section>

      <section>
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
    content: 'Maecenas quis elit a leo sollicitudin auctor. Morbi a lobortis enim. Vestibulum ante tortor, malesuada eget commodo eget, hendrerit vel tellus.'
  },
  {
    tittle: 'Razon número dos',
    content: 'Pellentesque tempor metus a odio sollicitudin, ac condimentum nunc tincidunt. Nam eu magna aliquet est malesuada laoreet in at turpis.'
  },
  {
    tittle: 'Razon número tres',
    content: 'Pellentesque tempor metus a odio sollicitudin, ac condimentum nunc tincidunt. Nam eu magna aliquet est malesuada laoreet in at turpis.'
  },
  {
    tittle: 'Razon número cuatro',
    content: 'Pellentesque tempor metus a odio sollicitudin, ac condimentum nunc tincidunt. Nam eu magna aliquet est malesuada laoreet in at turpis.'
  },
]