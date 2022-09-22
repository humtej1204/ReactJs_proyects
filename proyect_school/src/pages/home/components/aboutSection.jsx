import { NavLink } from "react-router-dom";

/* Styles */
import './aboutSection.scss';

/* Images */
import aboutImg from '../../../imgs/home/IMG01.jpg';

export function AboutSection() {
    return (
        <div className="aboutSection">
            <div className="container">
                <div className="content">
                    <h3>Sobre nosotros</h3>
                    <h1>Nuestra Institución</h1>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                    <NavLink to="/nosotros">Más datos sobre la institución</NavLink>
                </div>
                <div className="image">
                    <img src={aboutImg} alt=""/>
                </div>
            </div>
        </div>
    );
}