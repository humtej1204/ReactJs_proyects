import React, { useState } from "react";

/* Styles */
import './SelectedNoticia.scss'

/* Images */
import main_sect from '../../../../assets/imgs/institucion/main_sect.png'

/* Components */
import { HtmlParser } from "../../../../components/htmlParser/HtmlParser";

export function SelectedNoticia() {
    const [htmlData, setHtmlData] = useState('');

    return (
        <main id="selectedNews_section">
            <header>
                <div className="hero_background">
                    <img src={main_sect} alt="" />
                </div>

                <section className="hero_container header_style">
                    <img src={main_sect} alt="" className="hero_img" />

                    <div className="news_header">
                        <h1>
                            SPACE AND TIME | HIMNO DE CONVERGENCE SPACE AND TIME
                        </h1>
                        <p>
                            Mira el video musical de Space and Time, el himno de CONVERGENCE: A League of Legends Story. Video...
                        </p>
                    </div>

                    <div className="news_info_container">
                        <div className="date_info">23/08/23</div>
                        <div className="author_info">
                            <span className="author_rol">Alumno</span>
                            <hr />
                            <span className="author_tittle">Autor</span>
                            <span className="author_name">Haru Tejada</span>
                        </div>
                        <div className="share_social_media">
                            <a href="https://www.facebook.com">
                                <i className="fi fi-brands-facebook"></i>
                            </a>
                            <a href="https://www.twitter.com">
                                <i className="fi fi-brands-twitter"></i>
                            </a>
                            <a href="https://www.facebook.com">
                                <i className="fi fi-br-link"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </header>

            <article>
                <HtmlParser htmlData={htmlData} />
            </article>

            <div className="news_footer">
                <label>COMPARTIR ESTE ARTÍCULO</label>
                <a href="https://www.facebook.com">
                    <i className="fi fi-brands-facebook"></i>
                </a>
                <a href="https://www.twitter.com">
                    <i className="fi fi-brands-twitter"></i>
                </a>
                <a href="https://www.facebook.com">
                    <i className="fi fi-br-link"></i>
                </a>
            </div>
        </main>
    );
}