//import React from "react";
import { NavLink } from "react-router-dom";

/* Images */
import logo from '../../assets/imgs/components/logo_school.png'
import intranet_icon from '../../assets/imgs/components/intranet.svg'
import sub_nav_icon01 from '../../assets/imgs/components/huella-dactilar.svg'
import sub_nav_icon02 from '../../assets/imgs/components/banco.svg'
import sub_nav_icon03 from '../../assets/imgs/components/diploma.svg'
import sub_nav_icon04 from '../../assets/imgs/components/construccion-de-automoviles.svg'
import sub_nav_icon05 from '../../assets/imgs/components/formulario.svg'
import sub_nav_icon06 from '../../assets/imgs/components/calendario.svg'

/* StyleSheet */
import './header.scss'

export function Header() {
  return (
    <header id="mainLayout_header">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Alfredo Rebaza Acosta Logo" width="40px" />
        </NavLink>

        <div className="logo-text">
          <font color="#4285F4">ALFR</font>
          <font color="#34A853">EDO</font>
          <font color="#FBBC05"> REB</font>
          <font color="#EA4335">AZA</font>
          <br />
          <font color="#4285F4">ACO</font>
          <font color="#34A853">STA</font>
        </div>
      </div>
      
      <nav>
        <ul className="main-links">
          <li>
            <NavLink
              to="/"
              className={({isActive}) => (isActive ? "onIt" : "")}
            >Inicio</NavLink>
          </li>
          <li>
            <NavLink
              to="/matricula"
              className={({isActive}) => (isActive ? "onIt" : "")}
            >Matrícula</NavLink>
          </li>
          <li>
            <NavLink
              to="/nosotros"
              className={({isActive}) => (isActive ? "onIt" : "")}
            >Nosotros</NavLink>
            <ul className="sub-nav">
              <li>
                <NavLink to="/nosotros">
                  <img src={sub_nav_icon01} alt="" />
                  ¿Quienes somos?
                </NavLink>
              </li>
              <li>
                <NavLink to="/datosInstitucionales">
                  <img src={sub_nav_icon02} alt="" />
                  Datos de la Institución
                </NavLink>
              </li>
              <li>
                <NavLink to="/misionVision">
                  <img src={sub_nav_icon03} alt="" />
                  Misión y Visión
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
            to="/institucion"
              className={({isActive}) => (isActive ? "onIt" : "")}
            >Institución</NavLink>
            <ul className="sub-nav">
              <li>
                <NavLink to="/institucion">
                  <img src={sub_nav_icon04} alt="" />
                  Infraestructura
                </NavLink>
              </li>
              <li>
                <NavLink to="/noticias">
                  <img src={sub_nav_icon05} alt="" />
                  Noticias
                </NavLink>
              </li>
              <li>
                <NavLink to="/eventos">
                  <img src={sub_nav_icon06} alt="" />
                  Eventos
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              to="/contactanos"
              className={({isActive}) => (isActive ? "onIt" : "")}
            >Contáctanos</NavLink>
          </li>
        </ul>

        <NavLink to="/" className="btn-intranet">
          <img src={intranet_icon} className="icon_img" alt="" />
        </NavLink>
      </nav>
    </header>
  );
};
