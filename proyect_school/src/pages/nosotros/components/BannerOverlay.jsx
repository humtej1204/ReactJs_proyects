import React from "react";

/* Styles */
import './BannerOverlay.scss';

/* Images */
import IMG01 from '../../../assets/imgs/home/IMG01.jpg';

export function BannerOverlay() {
    return (
        <section id="nosotros_banner">
            <div className="banner_overlay">
            Puntualidad<br />
            Disciplina<br />
            Estudio
            </div>
            <img src={IMG01} alt="school" />
        </section>
    );
}