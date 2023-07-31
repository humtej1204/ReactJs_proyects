import React from "react";

/* Components */
import { ComponentSlider } from '../../../../../components/componentSlider/ComponentSlider';

/* Styles */
import './Events_Banner.scss';

/* Images */
import main_sect from '../../../../../assets/imgs/institucion/main_sect.png';

export function EventBannerCard(data) {
    return (
        <div className="black-card-news">
            <img src={main_sect} alt="" />
            <h1>SPACE AND TIME | HIMNO DE CONVERGENCE SPACE AND TIME</h1>
            <p>Mira el video musical de Space and Time, el himno de CONVERGENCE: A League of Legends Story. Video...</p>
            <div className="news_info">
                <span style={{color: "#EA4335"}}>Apr. 27 2023</span>
                <span style={{color: "#FBBC05"}}>Mas Informacion</span>
            </div>
        </div>
    );
}

export function EventsBanner() {
    return (
        <section className="events_hero">
            <img className="bg_hero" src={main_sect} alt="" />
            <div className="hero_container">
                <ComponentSlider data={test}
                RefComponent={EventBannerCard}
                elmMaxSize={350} />
            </div>
        </section>
    );
}

const test = [1,2,3];