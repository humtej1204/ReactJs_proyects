import React, { useState } from "react";

/* Styles */
import './SelectedEvento.scss'

/* Images */
import main_sect from '../../../../assets/imgs/institucion/main_sect.png'

/* Components */
import { HtmlParser } from "../../../../components/htmlParser/HtmlParser";

export function SelectedEvento() {
    const [htmlData, setHtmlData] = useState('');

    return (
        <main id="selectedEvent_section">
            <div className="section_container container_responsive">
                <section className="event_container">
                    <img src={main_sect} alt="" />

                    <header>
                        <span>
                            Fecha del Post: Agosto 24, 2023
                        </span>
                        <h1>
                            SPACE AND TIME | HIMNO DE CONVERGENCE SPACE AND TIME
                        </h1>
                        <p>
                            Mira el video musical de Space and Time, el himno de CONVERGENCE: A League of Legends Story. Video...
                        </p>
                    </header>

                    <hr />

                    <article>
                        <HtmlParser htmlData={htmlData} />
                    </article>

                    <div className="events_footer">
                        <label>COMPARTIR</label>
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
                </section>

                {/* <aside>

                </aside> */}
            </div>
        </main>
    );
}