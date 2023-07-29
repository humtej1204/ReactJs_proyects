import React, { Fragment } from "react";

/* Components */
import { MatriculaForm } from "./components/form";
import { FadeSlider } from "./components/fadeSlider";
import { ComponentSlider } from "../../components/componentSlider/ComponentSlider";


/* Info */
import { oferedInfo } from "./oferedIfno"

/* Styles */
import './matricula.scss'

/* Images */
import formacionSemanal from "../../assets/imgs/matricula/formacion_semanal.png";

function OferedItem({data}) {
  return (
    <div className="card-ofered">
      <div className="img-frame">
        <img src={data.img} alt="" />
      </div>

      <h2>{data.tittle}</h2>
      <p>{data.description}</p>
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
          <article className="offeredEducation container_responsive">
            <div className="image_container">
              <img src={formacionSemanal} alt="Formacion_semanal" />
            </div>

            <div className="article_container">
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
            <div className="morePropEdu_container container_responsive">
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
            </div>
          </article>

          <article className="moreAbout container_responsive">
            <h1>
              Conoce un poco de la educación que ofrecemos
            </h1>
            
            <ComponentSlider data={oferedInfo} RefComponent={OferedItem} />
          </article>
        </section>
      </main>
    </Fragment>
  );
}