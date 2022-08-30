//import React from "react";
import { NavLink } from "react-router-dom";

/* Images */
import logo from '../imgs/components/logo_school.png'
import logoWsp from '../imgs/components/wsp.png'
import logoFb from '../imgs/components/fb.png'
import logoIg from '../imgs/components/ig.png'

/* StyleSheet */
import './footer.css'

export function Footer() {
  return (
    <div className="footer">
      <div className="main-section">
        <div className="logo-sect">
          <img src={logo} />
        </div>

        <div className="info-sect">
          
          <ul className="inicio-sect">
            <li>
              <span className="title">
                <NavLink to="/">Inicio</NavLink>
              </span>
            </li>
            <li>
              <span className="title">
                <NavLink to="/nosotros">Nosotros</NavLink>
              </span>
              <ul>
                <li className="sub-title">
                  <NavLink to="/">¿Quiénes somos?</NavLink>
                </li>
                <li className="sub-title">
                  <NavLink to="/">Programas</NavLink>
                </li>
                <li className="sub-title">
                  <NavLink to="/">Datos de la Institución</NavLink>
                </li>
                <li className="sub-title">
                <NavLink to="/">Misión y Visión</NavLink>
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
                  <NavLink to="/institucion">Noticias</NavLink>
                </li>
                <li className="sub-title">
                  <NavLink to="/institucion">Eventos</NavLink>
                </li>
              </ul>
            </li>
          </ul>
          
          <ul className="contact-sect">
            <li>
              <span className="title">
                <NavLink to="/contactanos">Contacto</NavLink>
              </span>
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
                    <span className="sub-title">Correo:</span>
                    <br />
                    <span className="sub-content">
                      ie.alfredorebaza@gmail.com
                    </span>
                  </li>
                  <li>
                    <span className="sub-title">Horarios de Atención:</span>
                    <br />
                    <span className="sub-content">
                      8:00 am - 12:00 pm
                      <br />
                      2:00 am - 6:00 pm
                    </span>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>

        <div className="social-sect">
          <span className="title">REDES SOCIALES</span>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/iealfredorebazacostaoficial">
                <img src={logoFb} alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <img src={logoIg} alt="" />
              </a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/">
                <img src={logoWsp} alt="" />
              </a>
            </li>
          </ul>
          
          <ul>
            <li>
              <span className="sub-title">
                <a href="/">
                  Reglamento Interno
                </a>
              </span>
            </li>
            <li>
              <span className="sub-title">
                <a href="/">
                  Certificado de Estudios
                </a>
              </span>
            </li>
          </ul>
          
        </div>
      </div>

      <div className="sponsor-section">
        <hr />
        <div>
          <span>Proyectos de HaruHumtej</span>
          <span>
            <ul>
              <li>
                <a href="http://wild-harumon.tech/">
                  Huru’s Landing Page
                </a>
              </li>
              <li>
                <a href="https://github.com/humtej1204">
                  Github
                </a>
              </li>
              <li>
                <a href="https://medium.com/@humtej1204">
                  Medium
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/humberto-g-tejada-espinoza-b0155a138/">
                  LinkedIn
                </a>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}
