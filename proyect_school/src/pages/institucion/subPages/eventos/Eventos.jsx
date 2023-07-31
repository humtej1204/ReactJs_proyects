import React from "react";

/* Styles */
import './Eventos.scss'

/* Images */
import main_sect from '../../../../assets/imgs/institucion/main_sect.png'

/* Components */
import { EventsBanner } from "./components/Events_Banner";
import { SearchBar } from "../../../../components/searchBar/SearchBar";

export function Eventos() {
    const filterTypeList = [
        {key: "tittle", value: "Titulo"},
        {key: "description", value: "Descripción"},
        {key: "author", value: "Autor"},
    ]

    return (
        <main id="eventos-section">
            <EventsBanner />

            <section className="container_responsive">
                <SearchBar filterTypeList={filterTypeList} sizeWidth={'100%'} />

                <div className="filter_container">
                    <button className="filter_btn">
                        <span>Filtrar</span>
                        <i className="fi fi-rs-settings-sliders"></i>
                    </button>
                </div>
            </section>

            <section className="events_content container_responsive">
                <aside className="events_filter">
                    <h1>Articulos Publicados</h1>
                    <span>300 Resultados</span>

                    <hr />

                    <h2>Filtrar por:</h2>

                    <div className="filter_btns">
                        <button>Mas recientes primero</button>
                        <button>Mas Antiguos primero</button>
                    </div>

                    <form className="date_filter">
                        <label>Mes:</label>
                        <select name="" id="">
                            <option value="">Seleccione un mes</option>
                        </select>
                        
                        <label>Año:</label>
                        <input type="number" placeholder="Seleccione un año"
                        min="2023" max="2024" />
                    </form>
                </aside>

                <div className="events_list_container">
                    {test.map((elem, index) => (
                        <a href="/eventos/asd" key={"event_card_" + index}
                        className="event_card">
                            <img src={main_sect} alt="" />

                            <article className="event_data_container">
                                <h1>
                                    SPACE AND TIME | HIMNO DE CONVERGENCE SPACE AND TIME
                                </h1>

                                <p>
                                    Resumen del articulo...Maecenas sed mattis quam, eget commodo neque. Integer sagittis leo sapien, vitae dignissim sem cursus ut. Vivamus eu dolor libero. Nunc elementum erat eget fermentum convallis.
                                </p>

                                <div className="event_data_info">
                                    <span>
                                    Subido por: <b>Haru Tejada</b>
                                    </span>
                                    <span>Aug 24, 2022</span>
                                </div>
                            </article>
                        </a>
                    ))}

                    <button className="btn_more">
                        Mostrar más
                    </button>
                </div>
            </section>
        </main>
    );
}

const test = [1,2,3,4,5];