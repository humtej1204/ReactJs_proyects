import {
    useState, useEffect,
    useRef, useCallback,
} from "react";

import "./Swipper.css";

const data = [
    {tittle: "Tittle 1", color: "red"},
    {tittle: "Tittle 2", color: "blue"},
    {tittle: "Tittle 3", color: "yellow"},
    {tittle: "Tittle 4", color: "green"},
    {tittle: "Tittle 5", color: "purple"},
];

export function Swipper() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const timeoutRef = useRef(null);
  
    const handleWheel = useCallback((event) => {
      if (isAnimating) return;
  
      const direction = (event.deltaY < 0)?('up'):('down');
      const newIndex = (direction === 'up')?(currentSlide - 1):(currentSlide + 1);
  
      if (newIndex < 0 || newIndex >= data.length || newIndex === currentSlide) return;
  
      setIsAnimating(true);
      setCurrentSlide(newIndex);
    }, [currentSlide, isAnimating])
  
    useEffect(() => {
      const container = document.getElementById('scrollable-container');
      container.addEventListener('wheel', handleWheel);
  
      return (() => container.removeEventListener('wheel', handleWheel));
    }, [handleWheel, isAnimating]);
  
    useEffect(() => {
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
  
      return (() => clearTimeout(timeoutRef.current));
    }, [currentSlide]);

    return (
        <main id="scrollable-container" className="swipper-content">
            <div className="swipper-inner"
                style={{ transform: `translateY(${-currentSlide * 100}vh)`}}
            >
                {data.map((item, index) => (
                    <section className="swipper-section"
                    style={{
                        backgroundColor: `${item.color}`,
                    }}
                    key={index}>
                        { item.tittle }
                    </section>
                ))}
            </div>
        </main>
    );
}