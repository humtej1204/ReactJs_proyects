//import React from "react";
import { NavLink } from "react-router-dom";

/* Images */
import logo from '../../assets/imgs/components/logo_school.png'

/* StyleSheet */
import './footer.scss'

export function Footer() {
  return (
    <footer id="main-footer">
      <section className="container_responsive">
        <div className="section-content main-section">
          <div className="info-sect">
            <ul className="inicio-sect">
              <li>
                <NavLink to="/" className="title">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/nosotros" className="title">Nosotros</NavLink>
                <ul>
                  <li className="sub-title">
                    <NavLink to="/nosotros">¿Quiénes somos?</NavLink>
                  </li>
                  <li className="sub-title">
                    <NavLink to="/datosInstitucionales">Datos de la Institución</NavLink>
                  </li>
                  <li className="sub-title">
                    <NavLink to="/misionVision">Misión y Visión</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            
            <ul className="matricula-sect">
              <li>
                <span className="title">
                <NavLink to="/matricula">Matrícula</NavLink>
                </span>
              </li>
              <li>
                <span className="title">
                  <NavLink to="/institucion">Institución</NavLink>
                </span>
                <ul>
                  <li className="sub-title">
                    <NavLink to="/institucion">Infraestructura</NavLink>
                  </li>
                  <li className="sub-title">
                    <NavLink to="/noticias">Noticias</NavLink>
                  </li>
                  <li className="sub-title">
                    <NavLink to="/eventos">Eventos</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="logo-sect">
            <img src={logo} alt="" />
          </div>

          <div className="contact-sect">
            <NavLink to="/contactanos" className="title">Contacto</NavLink>
            <ul>
              <div>
                <li>
                  <span className="sub-title">Dirección:</span>
                  <br />
                  <span className="sub-content">
                    Av. El Trébol S/N
                    <br />
                    Urb. El Trébol - Los Olivos
                  </span>
                </li>
                <li>
                  <span className="sub-title">Teléfonos:</span>
                  <br />
                  <span className="sub-content">
                    5332463
                  </span>
                </li>
              </div>
              <div>
                <li>
                  <span className="sub-title">Horarios de Atención:</span>
                  <br />
                  <span className="sub-content">
                    8:00 am - 12:00 pm
                    <br />
                    2:00 am - 6:00 pm
                  </span>
                </li>
                <li>
                  <span className="sub-title">Correo:</span>
                  <br />
                  <span className="sub-content">
                    ie.alfredorebaza@gmail.com
                  </span>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container_responsive">
          <div className="social-sect section-content">
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com/iealfredorebazacostaoficial" rel="noreferrer" target="_blank">
                  <i className="fi fi-brands-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" rel="noreferrer" target="_blank">
                  <i className="fi fi-brands-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/" rel="noreferrer" target="_blank">
                  <i className="fi fi-brands-whatsapp"></i>
                </a>
              </li>
            </ul>
            
            <ul className="important_docs">
              <li>
                <a href="/" className="sub-title" rel="noreferrer" target="_blank">
                  Reglamento Interno
                </a>
              </li>
              <li>
                <a href="/" className="sub-title" rel="noreferrer" target="_blank">
                  Certificado de Estudios
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container_responsive">
        <div className="section-content sponsor-section">
          <span className="main_text">Proyectos de HaruHumtej</span>
          <ul>
            <li>
              <a href="http://wild-harumon.tech/" target="_blank" rel="noreferrer">
                Huru’s Landing Page
              </a>
            </li>
            <li>
              <a href="https://github.com/humtej1204" target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
            <li>
              <a href="https://medium.com/@humtej1204" target="_blank" rel="noreferrer">
                Medium
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/humberto-g-tejada-espinoza-b0155a138/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
