import React from "react";

/* Components */
import { MapMenu } from './components/mapMenu/MapMenu';
import { MapComponent } from './components/mapComponent/MapComponent';

/* Styles */
import './institutionsData.scss';

/* Images */
import friendsImg from '../../../../assets/imgs/nosotros/undraw_friends.png';
import logo from '../../../../assets/imgs/components/logo_school.png'

export function InstitutionData() {
    return (
        <main id="institutionData">
            <section id="map">
                <MapComponent />
                <MapMenu />
            </section>

            <section className="data_section">
                <article className="dataSect_container container_responsive">
                    <h1>
                        DATOS SOBRE LA
                        <br />
                        INSTITUCIÓN EDUCATIVA
                    </h1>
                    <p>
                        La Institución educativa Colegio Alfredo Rebaza Acosta, es más que una Institución Educativa, es un entorno familiar, un grupo de profesionales altamente cualificados que protegen para que los estudiantes se integren adecuadamente, tanto en su vida personal como social y escolar.
                    </p>

                    <div className="card-info">
                        <img src={friendsImg} alt="" />

                        <div className="info_section">
                            <div className="logo_info">
                                <img src={logo} alt="Alfredo Rebaza Acosta Logo" />

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

                            <div className="info_container">
                                {Object.entries(schoolData).map(([key, value]) => (
                                    <div className="elem_label" key={'elem_label' + key}>
                                        <span className="title_label">
                                            {value.tittle}
                                        </span>
                                        <span className="value_label">
                                            {value.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
}

const schoolData = {
    nivel: {tittle: 'Nivel', value: 'Secundaria'},
    tipo: {tittle: 'Tipo', value: 'Pública de gestión directa'},
    area: {tittle: 'Área', value: 'Urbana'},
    promotor: {tittle: 'Promotor', value: 'Pública - Sector Educación'},
    telefono: {tittle: 'Teléfono', value: '(01) 533-2463'},
    ugel: {tittle: 'Ugel', value: 'UGEL Rimac 02'},
    email: {tittle: 'E-mail', value: 'ie.alfredorebaza@gmail.com'},
    lenguaMadre: {tittle: 'Lengua Madre', value: 'Castellano'},
    categoria: {tittle: 'Categoría', value: 'Escolarizado'},
    estado: {tittle: 'Estado', value: 'Activo'},
    profesores: {tittle: 'Profesores', value: 'Polidocente'},
    nroAlumnos: {tittle: 'Nro. Aprox. de Alumnos', value: '1293'},
    genero: {tittle: 'Género', value: 'Mixto'},
    nroDocentes: {tittle: 'Nro. Aprox. de Docentes', value: '67'},
    turno: {tittle: 'Turno Continuo', value: 'Mañana y Tarde'},
    nroSecciones: {tittle: 'Nro. Aprox. de Secciones', value: '42'},
}