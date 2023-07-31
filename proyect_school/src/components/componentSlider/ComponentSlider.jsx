import React, { useRef, useState, useEffect } from "react";

/* Style */
import './ComponentSlider.scss';

export function ComponentSlider({data, RefComponent, elmMaxSize = 320}) {
    const sliderContRef = useRef();
    const sliderRef = useRef();
    const [contSize, setContSize] = useState(300)
    const [elmSize, setElmSize] = useState(300)
    const [elmPerPage, setElmPerPage] = useState(1)
    const [elmSep, setElmSep] = useState(20)
    const [moreCard, setMoreCard] = useState(0);
    const [elemsPaginator, setElemsPaginator] = useState(0);

    const goToCardIndex = (index) => {
        setMoreCard(index);
        
        sliderRef.current.scrollTo({
            top: 0,
            left: (elmSize + elmSep) * index,
            behavior: 'smooth'
        });
    }

    const handleContainerScroll = () => {
        const xPosition = sliderRef.current.scrollLeft;
        const index = Math.round(xPosition / (elmSize + elmSep));

        setMoreCard(index);
    }

    useEffect(() => {
        const updateElemsPaginator = (elmPerPage) => {
            if (elmPerPage > 1) setElemsPaginator(data.length - 1);
            else setElemsPaginator(data.length);
        }

        const updateSliderData = () => {
            let elmPerPage = 0;
            let contSize = sliderContRef.current.offsetWidth;
            let elmSize = (contSize >= elmMaxSize)?(elmMaxSize):(300);
            let elmSep = 20;
    
            elmPerPage = parseInt(contSize / elmSize);
            if (elmPerPage >= data.length) elmPerPage = data.length;

            elmSep = (contSize - (elmPerPage * elmSize));
    
            if (!(elmSep > 0 && elmSep > (elmPerPage - 1) * 20)) {
                elmPerPage = elmPerPage - 1;
                elmSep = (contSize - (elmPerPage * elmSize));
            }
    
            if (elmPerPage > 1)
                elmSep = elmSep / (elmPerPage - 1);
    
            if (elmSep > 50) elmSep = 50;
    
            contSize = (elmPerPage * (elmSize + elmSep)) - elmSep;
    
            setContSize(contSize);
            setElmSize(elmSize);
            setElmSep(elmSep);
            setElmPerPage(elmPerPage);
            updateElemsPaginator(elmPerPage);
        };
    
        updateSliderData();
        window.addEventListener("resize", updateSliderData);
    
        return () => {
          window.removeEventListener("resize", updateSliderData);
        };
    })

    return (
        <div id="cardSliderContainer" ref={sliderContRef}>
            <div className="slider_container"
            onScroll={() => handleContainerScroll()}
            ref={sliderRef}
            style={{width: `${(contSize)?(contSize + 'px'):('100%')}`}}>
                <div className="cards_container"
                style={{gap: `${elmSep}px`}}>
                    {data?.map((elem, index) => (
                        <div className="card_component"
                        style={{width: `${elmSize}px`}}
                        key={"RefComponent_" + index}>
                            <RefComponent data={elem}/>
                        </div>
                    ))}
                </div>
            </div>

            {(elmPerPage < data.length) && <div className="cardSliderIndicator">
                {data?.slice(0, elemsPaginator)
                .map((elem, index) => (
                    <div className={`slider_indicator ${(index === moreCard)?('indicator_active'):('')}`}
                    onClick={() => goToCardIndex(index)}
                    key={index}>&nbsp;</div>
                ))}
            </div>}
        </div>
    );
}