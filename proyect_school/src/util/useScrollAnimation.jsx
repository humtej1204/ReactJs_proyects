import {
  useState, useCallback,
  useEffect, useRef
} from "react";

export function useScrollAnimation(ref, index, slidesLength) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setSlideIndex(index);
  }, [index]);

  const handleScroll = useCallback((event) => {
    if (isAnimating) return;

    const newIndex = (event.deltaY < 0) ? (slideIndex - 1) : (slideIndex + 1);

    if (newIndex < 0 || newIndex > slidesLength) return;

    setIsAnimating(true);
    setSlideIndex(newIndex);
  }, [isAnimating, slideIndex, slidesLength]);

  useEffect(() => {
    const elemRef = document.getElementById(ref);
    const handleWheel = (event) => {
      handleScroll(event);
    };

    elemRef.addEventListener("wheel", handleWheel);

    return (() => elemRef.removeEventListener("wheel", handleWheel));
  }, [handleScroll, ref]);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);

    return (() => clearTimeout(timeoutRef.current));
  }, [slideIndex]);

  return ([slideIndex]);
}