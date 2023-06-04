import React from "react";


/* Styles */
import './nosotros.scss';

/* Images */
import IMG01 from '../../imgs/home/IMG01.jpg';
import whoWeAre from '../../imgs/nosotros/IMG05_3.png';

export function Nosotros() {
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

      <section id="nosotros-info_whoWeAre">
        <div className="nosotros-info_leftSect">
          <h1>¿Quiénes somos?</h1>

          <p>
            Maecenas quis elit a leo sollicitudin auctor. Morbi a lobortis enim. Vestibulum ante tortor, malesuada eget commodo eget, hendrerit vel tellus. Suspendisse ultrices augue ut tellus ultrices, iaculis porttitor eros bibendum. Vivamus magna nunc, viverra at commodo in, mollis sed lectus. Sed tincidunt turpis odio, quis scelerisque dolor sollicitudin nec. Aliquam et justo et ex pretium vestibulum eu eget neque. Nam sollicitudin leo quis risus vehicula aliquam. Phasellus non enim magna.
          </p>
        </div>

        <div className="image_container">
          <img src={whoWeAre} alt="" />
        </div>
      </section>

      <section id="nosotros-info_whyWe">
        <div className="left-section">
          <h1>¿Por qué elejirnos?</h1>
          <p>
            Maecenas quis elit a leo sollicitudin auctor. Morbi a lobortis enim. Vestibulum ante tortor, malesuada eget commodo eget, hendrerit vel tellus. Suspendisse ultrices augue ut tellus ultrices, iaculis porttitor eros bibendum. Vivamus magna nunc, viverra at commodo in, mollis sed lectus.
          </p>
        </div>

        <div className="right-section">
          <div className="reazon-elem">
            <h2>
              Razon número uno
            </h2>

            <p>
              Pellentesque tempor metus a odio sollicitudin, ac condimentum nunc tincidunt. Nam eu magna aliquet est malesuada laoreet in at turpis.
            </p>
          </div>

          <div className="reazon-elem">
            <h2>
              Razon número dos
            </h2>

            <p>
              Pellentesque tempor metus a odio sollicitudin, ac condimentum nunc tincidunt. Nam eu magna aliquet est malesuada laoreet in at turpis.
            </p>
          </div>

          <div className="reazon-elem">
            <h2>
              Razon número tres
            </h2>

            <p>
              Pellentesque tempor metus a odio sollicitudin, ac condimentum nunc tincidunt. Nam eu magna aliquet est malesuada laoreet in at turpis.
            </p>
          </div>
          
          <div className="reazon-elem">
            <h2>
              Razon número cuatro
            </h2>

            <p>
              Pellentesque tempor metus a odio sollicitudin, ac condimentum nunc tincidunt. Nam eu magna aliquet est malesuada laoreet in at turpis.
            </p>
          </div>
        </div>
      </section>

      <section id="nosotros-services_sect">
        <h1>
          Programas y Servicios que ofrecemos a los Alumnos
        </h1>

        <div className="container_selector">
          <div className="selected_elem">
            <img src="" alt="" />
            <div className="selected_elem-container">
              <h3>Profesores a cargo:</h3>
              <span>
                Profesor N1, Profesor N2, Profesor N3, ...
              </span>

              <h2>Aula de Computación</h2>
              <p>
                Nam eu magna aliquet est malesuada laoreet in at turpis. Maecenas quis elit a leo sollicitudin auctor. Morbi a lobortis enim. Vestibulum ante tortor, malesuada eget commodo eget, hendrerit vel tellus. Suspendisse ultrices augue ut tellus ultrices, iaculis porttitor eros bibendum. Vivamus magna nunc, viverra at commodo in, mollis sed lectus. Sed tincidunt turpis odio, quis scelerisque dolor sollicitudin nec.
              </p>
            </div>
          </div>

          <div className="elem-container">
            <div className="elem">
              <img src="" alt="" />
            
              <h2>Aula de Computación</h2>
              <p>
                Pellentesque tempor metus a odio sollicitudin, ac condimentum nunc tincidunt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}