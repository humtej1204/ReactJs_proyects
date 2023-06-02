import React, { Fragment } from "react";

/* Components */
import { MatriculaForm } from "./components/form";
import { FadeSlider } from "./components/fadeSlider";

/* Info */
import { oferedInfo } from "./oferedIfno"

/* Styles */
import './matricula.scss'

/* Images */
import formacionSemanal from "../../imgs/matricula/formacion_semanal.png";

function OferedItem({img, tittle, description}) {
  return (
    <div className="card-ofered">
      <div className="img-frame">
        <img src={img} alt="" />
      </div>

      <h2>{tittle}</h2>
      <p>{description}</p>
      
      <a href="/home" className="btn-see_more">
        Ver mas
        <i className="fi fi-rr-arrow-right"></i>
      </a>
    </div>
  );
}

export function Matricula() {
  return (
    <Fragment>
      <main id="matricula">
        <div className="banner-form">
          <FadeSlider />
          <MatriculaForm />
        </div>
        <section className="content-main">
          <article className="offeredEducation">
            <div className="left-side">
              <img src={formacionSemanal} alt="Formacion_semanal" />
            </div>

            <div className="right-side">
              <h1>
                <font color="#4285F4">Pro</font>
                <font color="#34A853">pu</font>
                <font color="#FBBC05">es</font>
                <font color="#EA4335">ta</font>
              <br />
                <font color="#4285F4">Edu</font>
                <font color="#34A853">ca</font>
                <font color="#FBBC05">ti</font>
                <font color="#EA4335">va</font>
              </h1>
              
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at urna cursus augue sagittis malesuada vitae sed ligula. Praesent et convallis tellus. Morbi condimentum augue vel dolor lacinia eleifend. Fusce maximus egestas est ac egestas.</p>
              <br />
              <p>Morbi malesuada, tortor ut suscipit ultricies, diam arcu tempus tellus, quis sollicitudin nibh urna sit amet ipsum. Sed mattis ex sit amet felis mollis, ut dictum urna mollis. Praesent interdum odio ut bibendum pretium. Curabitur sed nisi lobortis, maximus ex eu, interdum tortor.</p>
              <br />
              <p>Cras convallis luctus sagittis. Fusce feugiat ex vel eros maximus, vitae consequat tortor consequat. Pellentesque rhoncus risus sed semper mollis.</p>
            </div>
          </article>

          <article className="morePropEdu">
            <h1>¿Quieres conocer más sobre nuestra propuesta educativa?</h1>
            <ul className="proposal-list">
              <li>
                <i className="fi fi-rr-chart-histogram"></i>
                <span>
                  Docentes<br />Capacitados
                </span>
              </li>
              <li>
                <i className="fi fi-rr-list-check"></i>
                <span>
                  Seguimiento<br />Academico
                </span>
              </li>
              <li>
                <i className="fi fi-rr-users"></i>
                <span>
                  Escuela para<br />padres
                </span>
              </li>
              <li>
                <i className="fi fi-rr-globe"></i>
                <span>
                  Plataforma<br />Educativa
                </span>
              </li>
            </ul>
            <a href="/home" className="btn-see_more">
              Más Información
              <i className="fi fi-rr-arrow-right"></i>
            </a>
          </article>

          <article className="moreAbout">
            <h1>
              Conoce un poco de la educación que ofrecemos
            </h1>
            <div className="containerItems">
              {oferedInfo.map((item, index) => (
                <OferedItem
                  img={item.img}
                  tittle={item.tittle}
                  description={item.description}
                  key={index}
                />
              ))}
            </div>
          </article>
        </section>
      </main>
    </Fragment>
  );
}