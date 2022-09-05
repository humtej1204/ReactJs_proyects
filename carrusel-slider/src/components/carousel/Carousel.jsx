import { useState, useEffect } from "react";
import { useRef } from "react";

import { CarouselItem } from "./CarouselItem";
import { CarouselControls } from "./CarouselControls";
import { CarouselIndicators } from "./CarouselIndicators";

import "./Carousel.css";

export function Carousel({ slides, interval = 3000, controls = false, indicators = false, autoPlay = true }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideInterval = useRef();

    const switchIndex = (index) => {
        startSlideTimer()
        setCurrentSlide(index)
    };

    const startSlideTimer = () => {
      	stopSlideTimer();
        slideInterval.current = setInterval(() => {
            setCurrentSlide(currentSlide => currentSlide < slides.length - 1 ? currentSlide + 1 : 0)
        }, interval)
    }

    const stopSlideTimer = () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current)
      }
    }

    useEffect(() => {
        startSlideTimer()

        return () => stopSlideTimer()
    }, [])

    const prev = () => {
        startSlideTimer();
        const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
        setCurrentSlide(index);
    }
      
    const next = () => {
        startSlideTimer();
        const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
        setCurrentSlide(index);
    }

    return (
        <div className='carousel'>
            <div 
                className="carousel-inner"
                style={{ transform: `translateX(${-currentSlide * 100}%)`}}
            >
                {slides.map((slide, index) => (
                    <CarouselItem 
                        slide={slide} 
                        key={index} 
                        stopSlide={stopSlideTimer}
                        startSlide={startSlideTimer}
                    />
                ))}
            </div>
            {indicators && <CarouselIndicators slides={slides} currentIndex={currentSlide} switchIndex={switchIndex} />}
            {controls && <CarouselControls prev={prev} next={next} />}
        </div>
    );
}