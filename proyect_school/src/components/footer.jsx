//import React from "react";
import { NavLink } from "react-router-dom";

/* Images */
import logo from '../imgs/components/logo_school.png'
import logoWsp from '../imgs/components/wsp.png'
import logoFb from '../imgs/components/fb.png'
import logoIg from '../imgs/components/ig.png'

/* StyleSheet */
import './footer.scss'

export function Footer() {
  return (
    <footer>
      <section>
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
          </div>

          <div className="logo-sect">
            <img src={logo} alt="" />
          </div>

          <ul className="contact-sect">
            <li>
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
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="section-content social-sect">
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/iealfredorebazacostaoficial" target="_blank">
                <i class="fi fi-brands-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <i class="fi fi-brands-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/" target="_blank">
                <i class="fi fi-brands-whatsapp"></i>
              </a>
            </li>
          </ul>
          
          <ul>
            <li>
              <a href="/" className="sub-title" target="_blank">
                Reglamento Interno
              </a>
            </li>
            <li>
              <a href="/" className="sub-title" target="_blank">
                Certificado de Estudios
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="section-content sponsor-section">
          <span>Proyectos de HaruHumtej</span>
          <ul>
            <li>
              <a href="http://wild-harumon.tech/" target="_blank">
                Huru’s Landing Page
              </a>
            </li>
            <li>
              <a href="https://github.com/humtej1204" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="https://medium.com/@humtej1204" target="_blank">
                Medium
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/humberto-g-tejada-espinoza-b0155a138/" target="_blank">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
