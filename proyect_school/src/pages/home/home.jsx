import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

/* Components */
import { Slider } from "./components/slider";
import { slides } from "./sliderInfo";
import { OpinionComponent } from "./components/opinionComponent";
import { opinions } from "./opinionInfo";
import { EventsComponent } from "./components/event-component/EventsComponent";
import { events } from "./eventsInfo";

/* Styles */
import './home.scss'

/* Images */
import aboutImg from '../../assets/imgs/home/IMG01.jpg';

export function Home() {
  return (
    <Fragment>
      <main id="index">
        <Slider 
          slides={slides}
          interval={5000}
          controls={true} 
          indicators={true}
        />

        <section className="content-main">
          <article className="aboutSection container_responsive">
            <div className="content-text">
              <span>Sobre nosotros</span>
              <h1>Nuestra Institución</h1>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              </p>
              <NavLink className="about_btn"
              to="/nosotros">
                Más datos sobre la institución
              </NavLink>
            </div>
            
            <div className="image">
              <img src={aboutImg} alt=""/>
            </div>

            <NavLink className="about_btn"
            to="/nosotros">
              Más datos sobre la institución
            </NavLink>
          </article>
          
          <article className="opinionSection">
            <div className="container container_responsive">
              <h1>ASI OPINAN NUESTROS ALUMNOS Y GRADUADOS</h1>
              <OpinionComponent
                opinions={opinions}
              />
            </div>
          </article>
          
          <article className="eventSection container_responsive">
            <div className='eventsContainer'>
              <h1>EVENTOS REALIZADOS EN LA INSTITUCIÓN</h1>
              <p>Nuestra Institucion formeta a los alumnos a participar en las diversas actividades en fechas especiales para que puedan demostrar sus talentos y poder desenvolverse... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              
              <div className='eventsComponent_container'>
                <EventsComponent events={events} />
              </div>

              <NavLink to="/eventos">Ver todos</NavLink>
            </div>
          </article>
        </section>
      </main>
    </Fragment>
  );
}