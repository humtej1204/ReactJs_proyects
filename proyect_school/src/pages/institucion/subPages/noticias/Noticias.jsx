import React from "react";

/* Styles */
import './Noticias.scss'

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
                            SPACE AND TIME | HIMNO DE CONVERGENCE
                        </h1>
                        <p>
                            Mira el video musical de Space and Time, el himno de CONVERGENCE: A League of Legends Story. Video...
                        </p>
                    </div>
                    <img className="hero_img" src={main_sect} alt="" />
                </div>
            </section>

            <section className="main_articles">
                {test.map((elem, index) => (
                    <article className="article_container" key={index + elem}>
                        <img className="article_img" src={main_sect} alt="" />
                        <div className="article_info_container">
                            <div className="article_data">
                                <span>13/06/2023</span>
                                <span>Autor: Haru Tejada</span>
                            </div>
                            <div className="article_info">
                                <h1>SPACE AND TIME | HIMNO DE CONVERGENCE</h1>
                                <p>
                                    Mira el video musical de Space and Time, el himno de CONVERGENCE: A League of Legends Story. Video...
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}

const test = [1, 2, 3]