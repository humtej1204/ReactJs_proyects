import React, { Fragment } from "react";

/* Styles */
import './slider.scss'

export function Slider() {
    return (
        <Fragment>
            <div className="carruselContent">
                <div className="carrusel">
                    <div>
                        <div className="imgCarrusel"></div>
                        <div className="imgCarrusel"></div>
                        <div className="imgCarrusel"></div>
                        <div className="imgCarrusel"></div>
                        <div className="imgCarrusel"></div>
                    </div>
                </div>
                <div className="goLeft"></div>
                <div className="goRight"></div>
                
                <div className="carruselPagination">
                    <button className="cpDot"></button>
                    <button className="cpDot"></button>
                    <button className="cpDot"></button>
                    <button className="cpDot"></button>
                    <button className="cpDot"></button>
                </div>
            </div>
        </Fragment>
    );
}