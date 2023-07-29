import React, { useState } from "react";

/* Components */
import {BannerOverlay} from './components/BannerOverlay';
import {ComponentSlider} from '../../components/componentSlider/ComponentSlider';

/* Styles */
import './nosotros.scss';
import './ExpansibleReazon.scss';

/* Images */
import whoWeAre from '../../assets/imgs/nosotros/school001.png';

/* Info */
import { servicesData } from "./nosotros-info";

function ExpansibleReazon({data}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    const expand = !expanded;
    setExpanded(expand);
  }

  return (
    <div id="reazon_elem">
      <header onClick={handleExpand}>
        <h3>{data.tittle}</h3>
        <button className="expand_btn">
          {(expanded)?
            (<i className="fi fi-br-angle-small-up"></i>):
            (<i className="fi fi-br-angle-small-down"></i>)
          }
        </button>
      </header>

      {expanded && <p>{data.content}</p>}
    </div>
  );
}

function SelectedElemCard({data, animated}) {
  return (
    <div className="selected_elemCard">
      <img src={data.image} alt="" />
      <div className="selected_elemCont">
        <b>Profesores a cargo:</b>
        <span>
          {data.inCharge}
        </span>

        <h2>{data.service}</h2>
        <p>
          {data.description}
        </p>
      </div>
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
          <div className="whoWeAre_mainContSect">
            <h1>Quiénes somos</h1>

            <p>
              Maecenas quis elit a leo sollicitudin auctor. Morbi a lobortis enim. Vestibulum ante tortor, malesuada eget commodo eget, hendrerit vel tellus. Suspendisse ultrices augue ut tellus ultrices, iaculis porttitor eros bibendum. Vivamus magna nunc, viverra at commodo in, mollis sed lectus.
            </p>
          </div>

          <div className="whoWeAre_imgCont">
            <img className="mainImg"
            src={whoWeAre} alt="" />
          </div>

          <div className="whoWeAre_contSect">
            <div className="paragraph_sect">
              <h2>
                Un Legado de Excelencia
              </h2>

              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              </p>

              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
              </p>
            </div>

            <div className="paragraph_sect">
              <h2>
                El Equipo que Hace Posible Nuestro Éxito
              </h2>

              <p>
                Cras a justo diam. Duis scelerisque vestibulum semper. Quisque molestie lacus elit, id posuere tortor lobortis at. Mauris pretium tellus nec porttitor finibus. Curabitur quis aliquam lorem. Nunc erat lectus, scelerisque nec enim eu, facilisis convallis tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer a metus vitae augue luctus lobortis. In eget libero libero. Proin erat risus, maximus ut mi non, vulputate scelerisque urna. In rhoncus id dui eu vulputate. Aenean faucibus a risus et tempus. Donec ut semper nulla. Pellentesque tristique est et tellus venenatis vulputate. Etiam a ex suscipit, ornare tellus vitae, fermentum lectus.
              </p>

              <p>
                Vivamus placerat ac metus eu condimentum. Phasellus vitae auctor magna. Sed ac est eu felis hendrerit pretium. Duis finibus luctus interdum. Aliquam euismod vel tortor vel bibendum. Ut vitae ornare nunc, ultricies lobortis diam. Vivamus sed lorem elementum, tempus sapien in, iaculis eros. Ut porta mattis cursus. Nam non convallis dui, eu varius lectus. Nam nulla dolor, efficitur hendrerit lorem vitae, ultricies hendrerit lacus.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="nosotros_whyWe">
        <div className="whyWe_container container_responsive">
          <article className="whyWe_leftSect">
            <h1>Elige Excelencia Educativa</h1>
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

      <section className="nosotros_services">
        <article className="services_container container_responsive">
          <h1>
            Programas y Servicios que ofrecemos a los Alumnos
          </h1>

          <div className="container_slider">
              <ComponentSlider data={servicesData} RefComponent={SelectedElemCard} />
          </div>

          <div className="container_selector">
            <div className={`selected_elem ${animate?('fadeLeft'):('')}`}>
              <img src={selectData.image} alt="" />
              <div className="selected_elemCont">
                <b>Profesores a cargo:</b>
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