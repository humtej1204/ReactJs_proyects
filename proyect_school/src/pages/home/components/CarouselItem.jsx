export function CarouselItem({ slide, title, description, stopSlide, startSlide }) {

    return (
      <div className="carousel-item" onMouseEnter={stopSlide} onMouseOut={startSlide}>
        <img src={slide} alt="" />
        <div className="overlay">
          <div className="overlay-title">{title}</div>
          <div className="overlay-text-content">
            {description}
          </div>
        </div>
      </div>
    );
}