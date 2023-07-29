import React from "react";

/* Styles */
import './section-navigator.scss'

export function SectionNavigator({ tittles, currentIndex, changeIndex }) {
  const handleSendData = (index) => {
    changeIndex(index);
  };
  
  const handleChangeIndex = (index) => {
    handleSendData(index);
  };

  return (
    <div id="institution-navigator"
    className={(currentIndex === 0)?('hidden_navigator'):('show_navigator')}>
      <ul>
        <li style={{right: '10px'}}>
          <button onClick={() => handleChangeIndex(0)}>
            <span>
              I.E.P. Alfredo Rebaza
              <br/>Acosta
            </span>
            <div className='guide_icon'>
              &nbsp;
            </div>
          </button>
        </li>
        
        {tittles.map((elem, index) => (
          <li key={"institutionNavItem_" + index}
          style={(currentIndex === (index + 1))?({right: '6.5px'}):({right: '10px'})}>
            <button onClick={() => handleChangeIndex(index + 1)}>
              <span
              className={(currentIndex === (index + 1))?('span_active'):('')}>
                { elem }
              </span>
              <div
              className={(currentIndex === (index + 1))?('guide_icon_active'):('guide_icon')}>
                &nbsp;
              </div>
            </button>
          </li>
        ))}
      </ul>

      <div className="institutionNavItem_verticalLine">&nbsp;</div>
    </div>
  );
}