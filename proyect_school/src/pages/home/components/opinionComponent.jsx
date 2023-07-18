import { useState, useEffect, useRef } from 'react'

/* Components */
import { OpinionCard } from './opinion-components/opinionCard';
import { OpinionPagination } from './opinion-components/opinionPagination';

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
            if (refCont.current.offsetWidth <= 1440)
                setWidthCont(refCont.current.offsetWidth);
            else setWidthCont(1440);
            setElemPerPage(parseInt(widthCont / 300));
        }

        window.addEventListener('resize', handleWindowResize);
        
        handleWindowResize();

        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
    });

    return (
        <section className="cards-container">
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
        </section>
    );
}