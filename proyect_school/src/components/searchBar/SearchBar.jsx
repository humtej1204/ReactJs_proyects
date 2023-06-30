import React from "react";

/* Styles */
import './SearchBar.scss'

export function SearchBar({ filterTypeList, sizeWidth = '800px' }) {
    return (
        <form className="search_container"
        style={{width: sizeWidth}}>
            <div className="search-input_container">
                <i class="fi fi-br-caret-down"></i>
                <select name="filterType">
                    {filterTypeList.map((elem, index) => (
                        (index === 0)?
                        <option value={elem.key} key={"filterType_" + index} selected>{elem.value}</option>:
                        <option value={elem.key} key={"filterType_" + index}>{elem.value}</option>
                    ))}
                </select>
                <input type="text" placeholder="Buscar" />
            </div>

            <button className="search_btn">
                <i class="fi fi-br-search"></i>
            </button>
        </form>
    );
}