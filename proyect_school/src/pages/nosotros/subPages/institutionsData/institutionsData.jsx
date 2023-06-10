import React from "react";

/* Components */
import { MapMenu } from './components/mapMenu/MapMenu';

/* Styles */
import './institutionsData.scss';

/* Images */
// import friendsImg from '../../../../imgs/nosotros/undraw_friends.png';
// import bg_poligon from '../../../../imgs/nosotros/bg_poligon03.png';

export function InstitutionData() {
    return (
        <main id="institutionData">
            <section id="map">
                <div className="mapContent">&nbsp;</div>
                <MapMenu />
            </section>

            <section id="data">

            </section>
        </main>
    );
}