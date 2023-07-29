import React from "react";

/* Styles */
import './SearchBar.scss'

export function SearchBar({ filterTypeList, sizeWidth = '800px' }) {
    return (
        <form className="search_container"
        style={{maxWidth: sizeWidth}}>
            <div className="search-input_container">
                <i className="fi fi-br-caret-down"></i>
                <select name="filterType">
                    {filterTypeList.map((elem, index) => {
                        if (index === 0)
                            return <option value={elem.key} key={"filterType_" + index} defaultValue>{elem.value}</option>
                        else
                            return <option value={elem.key} key={"filterType_" + index}>{elem.value}</option>
                    })}
                </select>
                <input type="text" placeholder="Buscar" />
            </div>

            <button className="search_btn">
                <i className="fi fi-br-search"></i>
            </button>
        </form>
    );
}