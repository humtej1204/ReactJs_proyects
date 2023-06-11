/* Images */
import left_icon from '../../../../assets/imgs/home/angulo-izquierdo.svg';
import right_icon from '../../../../assets/imgs/home/angulo-derecho.svg';

export function CarouselControls({ prev, next }) {
    return (
        <div>
            <button className="carousel-control left" onClick={prev}>
                <img src={left_icon} alt="" />
            </button>
            <button className="carousel-control right" onClick={next}>
                <img src={right_icon} alt="" />
            </button>
        </div>
    )
}