import {
  useState, useCallback,
  useEffect, useRef
} from "react";

export function useSwipeAnimation(ref, index, slidesLength) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setSlideIndex(index);
  }, [index]);

  const handleSwipeStart = useCallback((event) => {
    touchStartRef.current = event.touches[0].clientY;
  }, []);

  const handleSwipeEnd = useCallback((event) => {
    if (isAnimating || touchStartRef.current === null) return;
  
    const touchEnd = event.changedTouches[0].clientY;
    const touchDiff = touchStartRef.current - touchEnd;
    const sensitivity = 100;
  
    if (touchDiff > sensitivity && slideIndex < slidesLength) {
      setIsAnimating(true);
      setSlideIndex(slideIndex + 1);
    } else if (touchDiff < -sensitivity && slideIndex > 0) {
      setIsAnimating(true);
      setSlideIndex(slideIndex - 1);
    }
  
    touchStartRef.current = null;
  }, [isAnimating, slideIndex, slidesLength]);

  useEffect(() => {
    const elemRef = document.getElementById(ref);
    const handleTouchStart = (event) => {
      handleSwipeStart(event);
    };

    const handleTouchEnd = (event) => {
      handleSwipeEnd(event);
    };

    elemRef.addEventListener("touchstart", handleTouchStart);
    elemRef.addEventListener("touchend", handleTouchEnd);

    return () => {
      elemRef.removeEventListener("touchstart", handleTouchStart);
      elemRef.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleSwipeStart, handleSwipeEnd, ref]);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);

    return () => clearTimeout(timeoutRef.current);
  }, [slideIndex]);

  return ([slideIndex]);
}