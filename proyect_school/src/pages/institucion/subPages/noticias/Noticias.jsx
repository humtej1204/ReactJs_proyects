import React from "react";

/* Styles */
import './Noticias.scss'

/* Components */
import { ArticleSlider } from './components/ArticleSlider';

/* Images */
import main_sect from '../../../../assets/imgs/institucion/main_sect.png'


export function Noticias() {
    return (
        <main id="noticias_section">
            <section className="hero_container">
                <div className="hero_bg_container">
                    <img className="hero_bg" src={main_sect} alt="" />
                </div>

                <div className="hero_data_container">
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
                </div>
            </section>

            <section className="articleSlider_container">
                <ArticleSlider />
            </section>

            <section className="search_container">
                <div className="filter_container">
                    <select name="filterType">
                        <option value="tittle" selected>Titulo</option>
                        <option value="author">Autor</option>
                    </select>
                    <input type="text" placeholder="Buscar" />
                </div>

                <div className="dateFilter_container">
                    <input type="date" id="range_start" name="range_start" />
                    <input type="date" id="range_end" name="range_end" />
                </div>

                <button>Filtrar</button>
            </section>

            <section className="news_container">
                <div className="news_card">
                    asd
                </div>
            </section>
        </main>
    );
}