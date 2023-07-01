import React from "react";

/* Styles */
import './Noticias.scss'

/* Components */
import { ArticleSlider } from './components/ArticleSlider';
import { SearchBar } from "../../../../components/searchBar/SearchBar";

/* Images */
import main_sect from '../../../../assets/imgs/institucion/main_sect.png'


export function Noticias() {
    const filterTypeList = [
        {key: "tittle", value: "Titulo"},
        {key: "description", value: "Descripción"},
        {key: "author", value: "Autor"},
    ]

    return (
        <main id="noticias_section">
            <section className="hero_container">
                <div className="hero_bg_container">
                    <img className="hero_bg" src={main_sect} alt="" />
                </div>

                <article className="hero_data_container">
                    <div className="hero_data">
                        <span>Haru Tejada</span>
                        <h1>
                            SPACE AND TIME | HIMNO DE CONVERGENCE SPACE AND TIME
                        </h1>
                        <p>
                            Mira el video musical de Space and Time, el himno de CONVERGENCE: A League of Legends Story. Video...
                        </p>
                    </div>
                    <img className="hero_img" src={main_sect} alt="" />
                </article>
            </section>

            <section className="articleSlider_container">
                <ArticleSlider />
            </section>

            <section className="search_filter_section">
                <SearchBar filterTypeList={filterTypeList} />

                <section className="filter_container">
                    <button className="filter_btn">
                        <span>Filtrar</span>
                        <i className="fi fi-rs-settings-sliders"></i>
                    </button>
                </section>

                {/* <section className="dateFilter_container">
                    <label htmlFor="range_start">Desde:</label>
                    <input type="date" id="range_start" name="range_start" />
                    <span>-</span>
                    <label htmlFor="range_end">Hasta:</label>
                    <input type="date" id="range_end" name="range_end" />
                </section> */}

                <hr />
            </section>

            <section className="news_container">
                {test.map((elem, index) => (
                    <a href="/noticias/asd"
                    className="news_card" key={"news_" + index}>
                        <img src={main_sect} alt="" />
                        <article className="news_card_data_content">
                            <div className="news_card_content">
                                <h1>
                                    SPACE AND TIME | HIMNO DE CONVERGENCE SPACE AND TIME
                                </h1>
                                <p>
                                    Mira el video musical de Space and Time, el himno de CONVERGENCE: A League of Legends Story. Video asd asd asdasdasda ssadasdaea sd asde asda asdas...
                                </p>
                            </div>

                            <div className="news_card_info">
                                <span>
                                    <b>23/08/23</b>
                                </span>
                                <span>
                                    <b>Autor:</b> Haru Tejada
                                </span>
                            </div>
                        </article>
                    </a>
                ))}
            </section>
        </main>
    );
}

const test = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1]