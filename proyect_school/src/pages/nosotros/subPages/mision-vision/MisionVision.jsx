import React, { useEffect, useState } from "react";


/* Styles */
import './MisionVision.scss';

/* Images */
import bannerImg from '../../../../assets/imgs/nosotros/school001.png';
import misionImg from '../../../../assets/imgs/nosotros/mision-img.png';
import visionImg from '../../../../assets/imgs/nosotros/vision-img.png';

export function MisionVision() {
    const [sectionActive, setSectionActive] = useState('mision');
    const [entryAnimation, setEntryAnimation] = useState(true);
    const [objImg, setObjImg] = useState(misionImg);

    const handleChangeSection = (key) => {
        setSectionActive(key);
    }

    useEffect(() => {
        setEntryAnimation(false);

        setTimeout(() => {
            setEntryAnimation(true);
            setObjImg((sectionActive === 'mision')?(misionImg):(visionImg));
        }, 200);
    }, [sectionActive]);

    return (
        <main id="misionVision">
            <section id="presentation_banner"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${bannerImg})` }}>
                <h1>METAS Y OBJETIVOS</h1>
                <p>
                    Integer augue eros, rutrum at nisi vel, tempor faucibus urna. Aliquam sed tortor nec lacus ultricies condimentum eget in justo. Nullam sodales id metus vitae sollicitudin. Ut ullamcorper tincidunt malesuada.
                </p>
            </section>

            <section id="misionVision_content">
                <article id="values">
                    <h1>Nuestros Valores</h1>
                    <div className="values_container">
                        {values.map((elem, index) => (
                            <div key={'value_' + index} className="value_container">
                                <div className="value_icon">
                                    <i class={`fi fi-rr-${elem.icon}`}></i>
                                </div>
                                <h2 className="value_text">{elem.value}</h2>
                            </div>
                        ))}
                    </div>
                </article>

                <article id="objectives">
                    <div className="img_container">
                        <img src={objImg}
                        alt={sectionActive + "section"}
                        className={(entryAnimation)?(''):('img_entry')} />
                    </div>

                    <div className={`objective_container ${(sectionActive === 'mision')?('mision_container container_active'):('')}`}>
                        <button className="objective_btn mision_icon"
                        onClick={() => handleChangeSection("mision")}>
                            <i class="fi fi-rs-bullseye-arrow"></i>
                        </button>
                        <div className="objective_content mision_content">
                            <h1>MISIÓN</h1>
                            <p>
                                Maecenas sit amet finibus justo. Etiam interdum, turpis a mollis condimentum, nunc libero vehicula dui, in mollis dui justo id velit. Sed eget rhoncus mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. In pretium sapien eu sapien posuere dapibus. Nam blandit auctor urna, ac dapibus sapien lobortis a. Nunc vulputate leo et nisl tristique aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                            </p>
                        </div>
                    </div>
                    <div className={`objective_container ${(sectionActive === 'vision')?('vision_container container_active'):('')}`}>
                        <button className="objective_btn vision_icon"
                        onClick={() => handleChangeSection("vision")}>
                            <i class="fi fi-rs-eye"></i>
                        </button>
                        <div className="objective_content vision_content">
                            <h1>VISIÓN</h1>
                            <p>
                                Duis in orci viverra, mattis nulla at, tempus dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sed velit faucibus, facilisis urna id, pellentesque ipsum. Etiam ut pellentesque velit. Vestibulum varius varius justo, ac vulputate dolor viverra nec. In hac habitasse platea dictumst. In urna eros, auctor eu nisl nec, facilisis bibendum nulla. Praesent at consequat lorem, in porttitor lorem.
                            </p>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
}

const values = [
    {value: 'Puntualidad', icon: 'alarm-clock'},
    {value: 'Disciplina', icon: 'book-open-reader'},
    {value: 'Estudio', icon: 'books'}
]