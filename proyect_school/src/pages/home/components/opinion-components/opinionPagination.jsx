import { useState } from 'react'

/* Styles */
import './opinionPagination.scss';

export function OpinionPagination({ page, setPage, max }) {
    const [input, setInput] = useState(1);

    function chgPage(pos) {
        const n = (pos === "prev") ? (-1) : (1);

        setInput(input + n);
        setPage(page + n);
    };

    function goExtrems(pos) {
        const n = (pos === "last") ? (max) : (1);

        setInput(n);
        setPage(n);
    } 

    function onKeyDown(e) {
        if (e.keyCode === 13) {
            setPage(parseInt(e.target.value));
            
            if (
                parseInt(e.target.value) < 1 ||
                isNaN(parseInt(e.target.value))
            ) {
                setPage(1);
                setInput(1);
            } else if (parseInt(e.target.value) > max) {
                setPage(max);
                setInput(max);
            } else {
               setPage(parseInt(e.target.value));
            }
        }
    };

    function onChange(e) {
        setInput(e.target.value);
    }

    return (
        <div className="pagination">
            <button onClick={() => goExtrems("first")}>
                <i className="fi fi-sr-angle-double-left" />
            </button>
            <button
                onClick={() => chgPage("prev")}
                disabled={(page === 1) ? true : false}
            >
                <i className="fi fi-sr-angle-left" />
            </button>
            <input
                type="text"
                onKeyDown={(e) => onKeyDown(e)}
                onChange={(e) => onChange(e)}
                value={input}
            />
            <div className='maxPage_indicator'>{String(max)}</div>
            <button
                disabled={(page === max) ? true : false}
                onClick={() => chgPage("next")}
            >
                <i className="fi fi-sr-angle-right" />
            </button>
            <button onClick={() => goExtrems("last")}>
                <i className="fi fi-sr-angle-double-right" />
            </button>
        </div>
    );
}