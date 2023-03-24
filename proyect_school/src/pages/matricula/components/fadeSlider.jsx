import React, {
    useState,
    useEffect,
    useRef
} from "react";

/* Styles */
import './fadeSlider.scss'

export function FadeSlider({ interval = (10 * 1000), autoPlay = true }) {
    const slides = [
        "http://iealfredorebazaacosta.edu.pe/wp-content/uploads/2021/04/ara-2.jpeg",
        "http://iealfredorebazaacosta.edu.pe/wp-content/uploads/2021/04/IMG_20190524_114645-1024x768.jpg",
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideInterval = useRef();

    const startSlideTimer = () => {
        if (autoPlay) {
            stopSlideTimer();
            slideInterval.current = setInterval(() => {
                setCurrentSlide(currentSlide => currentSlide < slides.length - 1 ? currentSlide + 1 : 0)
            }, interval)
        }
    }

    const stopSlideTimer = () => {
      if (autoPlay && slideInterval.current) {
        clearInterval(slideInterval.current)
      }
    }

    useEffect(() => {
        startSlideTimer();
        return () => stopSlideTimer();
    })

    return (
        <div className={"fadeSlider"}>
            <img
                src={slides[currentSlide]}
                className='fadeFrame'
                alt=""
            />
        </div>
    );
};