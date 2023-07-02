import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { PopUpContext } from "../../contexts/contextos/PopUpContext";

/* Styles */
import './SidebarMenu.scss'

/* Images */
import logo from '../../assets/imgs/components/logo_school.png'
import sub_nav_icon01 from '../../assets/imgs/components/huella-dactilar.svg'
import sub_nav_icon02 from '../../assets/imgs/components/banco.svg'
import sub_nav_icon03 from '../../assets/imgs/components/diploma.svg'
import sub_nav_icon04 from '../../assets/imgs/components/construccion-de-automoviles.svg'
import sub_nav_icon05 from '../../assets/imgs/components/formulario.svg'
import sub_nav_icon06 from '../../assets/imgs/components/calendario.svg'

export function SidebarMenu() {
    const { closePopup } = useContext(PopUpContext);
    const [openSubMenu, setOpenSubMenu] = useState('');
  
    const handleClosePopup = () => {
      closePopup();
    };

    const handleOpenSubMenu = (submenu) => {
        if (openSubMenu === submenu) {
            setOpenSubMenu('');
            return;
        }

        setOpenSubMenu(submenu);
    }

    return (
        <div id="sidebar">
            <header className="sidebar_header">
                <div className="logo_cont">
                    <img src={logo} alt="Alfredo Rebaza Acosta Logo" width="40px" />

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

                <button onClick={handleClosePopup}
                className="btn_close">
                    <i className="fi fi-br-cross"></i>
                </button>
            </header>

            <hr />
            
            <div className="links_container">
                <ul className="sidebar_fst_sect">
                    <NavLink
                        className="main_link"
                        to="/"
                    >
                        <i className="fi fi-br-home"></i>
                        <span>Inicio</span>
                    </NavLink>
                    <NavLink
                        to="/matricula"
                        className="main_link"
                    >
                        <i className="fi fi-br-file-invoice"></i>
                        <span>Matrícula</span>
                    </NavLink>

                    <li className="main_link" onClick={() => handleOpenSubMenu('nosotros')}>
                        <i className="fi fi-br-users"></i>
                        <span>Nosotros</span>
                    </li>
                    <ul className="sub_sect"
                        style={{display: (openSubMenu === 'nosotros')?('flex'):('none')}}>
                        <li>
                            <NavLink to="/nosotros">
                                <img src={sub_nav_icon01} alt="" />
                                <span>¿Quienes somos?</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/datosInstitucionales">
                                <img src={sub_nav_icon02} alt="" />
                                <span>Datos de la Institución</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/misionVision">
                                <img src={sub_nav_icon03} alt="" />
                                <span>Misión y Visión</span>
                            </NavLink>
                        </li>
                    </ul>

                    <li className="main_link" onClick={() => handleOpenSubMenu('institucion')}>
                        <i className="fi fi-rs-school"></i>
                        <span>Institución</span>
                    </li>
                    <ul className="sub_sect"
                        style={{display: (openSubMenu === 'institucion')?('flex'):('none')}}>
                        <NavLink to="/institucion">
                            <img src={sub_nav_icon04} alt="" />
                            <span>Infraestructura</span>
                        </NavLink>
                        <NavLink to="/noticias">
                            <img src={sub_nav_icon05} alt="" />
                            <span>Noticias</span>
                        </NavLink>
                        <NavLink to="/eventos">
                            <img src={sub_nav_icon06} alt="" />
                            <span>Eventos</span>
                        </NavLink>
                    </ul>
                    
                    <NavLink
                        to="/contactanos"
                        className="main_link"
                    >
                        <i className="fi fi-br-address-book"></i>
                        <span>Contáctanos</span>
                    </NavLink>
                </ul>
                
                <hr />

                <div className="end_sect">
                    <hr />
                    <NavLink
                        to="/"
                        className="intranet_link"
                    >
                        <i className="fi fi-rr-graduation-cap"></i>
                        <span>Intranet</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}