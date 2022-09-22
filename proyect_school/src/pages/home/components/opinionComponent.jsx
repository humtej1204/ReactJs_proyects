import { useState, useEffect, useRef } from 'react'

/* Components */
import { OpinionCard } from './opinionSectionComponents/opinionCard';
import { OpinionPagination } from './opinionSectionComponents/opinionPagination';

/* Styles */
import './opinionComponent.scss';

export function OpinionComponent({ opinions }) {
    const [page, setPage] = useState(1);
    const [elemPerPage, setElemPerPage] = useState(3);
    
    const refCont = useRef(null);
    const [widthCont, setWidthCont] = useState(0);
    
    const maxElm = opinions.length / elemPerPage;
    const max = (maxElm > parseInt(maxElm)) ? (parseInt(maxElm) + 1) : (parseInt(maxElm));


    useEffect(() => {
        function handleWindowResize() {
            setWidthCont(refCont.current.offsetWidth);
            setElemPerPage(parseInt(widthCont / 275));
        }

        window.addEventListener('resize', handleWindowResize);
        
        handleWindowResize();

        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
    });

    return (
        <div className="opinionSection">
            <div className="container">
                <h3>ASI OPINAN NUESTROS ALUMNOS Y GRADUADOS</h3>
                <div className="cards-container">
                    <div className="cards" ref={refCont}>
                        {opinions
                        .slice((page - 1) * elemPerPage, (page - 1) * elemPerPage + elemPerPage)
                        .map((item, index) => (
                            <OpinionCard
                                imagen={item.img}
                                personLvl={item.personLvl}
                                title={item.title}
                                description={item.description}
                                key={index}
                            />
                        ))}
                    </div>
                    <OpinionPagination
                        page={page}
                        setPage={setPage}
                        max={max}
                    />
                </div>
            </div>
        </div>
    );
}