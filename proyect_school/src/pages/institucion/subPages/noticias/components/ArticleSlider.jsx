import React from "react";

/* Components */
import { ComponentSlider } from "../../../../../components/componentSlider/ComponentSlider";

/* Styles */
import './ArticleSlider.scss'

/* Images */
import main_sect from '../../../../../assets/imgs/institucion/main_sect.png'

export function ArticleHorizontalCard() {
    return (
        <a href="/noticias/asd"
        id="articleHor_container">
            <img className="article_img" src={main_sect} alt="" />
            <div className="article_info_container">
                <div className="article_info">
                    <h1>SPACE AND TIME | HIMNO DE CONVERGENCE SPACE AND TIME</h1>
                    <p>
                        Mira el video musical de Space and Time, el himno de CONVERGENCE: A League of Legends Story. Video asd asd asdasdasda ssadasdaea sd asde asda asdas...
                    </p>
                </div>
                <div className="article_data">
                    <span><b>13/06/2023</b></span>
                    <span>
                        <b>Autor:</b> Haru Tejada
                    </span>
                </div>
            </div>
        </a>
    );
}

export function ArticleVerticalCard() {
    return (
        <a href="/noticias/asd"
        id="articleVert_container">
            <img className="article_img" src={main_sect} alt="" />
            <div className="article_info_container">
                <div className="article_info">
                    <h1>SPACE AND TIME | HIMNO DE CONVERGENCE SPACE AND TIME</h1>
                    <p>
                        Mira el video musical de Space and Time, el himno de CONVERGENCE: A League of Legends Story. Video asd asd asdasdasda ssadasdaea sd asde asda asdas...
                    </p>
                </div>
                <div className="article_data">
                    <span><b>13/06/2023</b></span>
                    <span>
                        <b>Autor:</b> Haru Tejada
                    </span>
                </div>
            </div>
        </a>
    );
}

export function ArticleSlider() {
    return (
        <div className="main_articles">
            <div className="articlesVert_cont">
                <ComponentSlider data={test}
                RefComponent={ArticleVerticalCard} />
            </div>

            <div className="articlesHor_cont">
                {test.map((elem, index) => (
                    <ArticleHorizontalCard key={'news_N' + index} />
                ))}
            </div>
        </div>
    );
}

const test = [1,2,3];