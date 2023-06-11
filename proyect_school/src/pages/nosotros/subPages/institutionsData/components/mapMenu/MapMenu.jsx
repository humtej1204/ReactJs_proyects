import React, { useState, useEffect, useCallback, Fragment } from "react";

/* Style */
import './MapMenu.scss';

export function MapMenu() {
    const delayAnimations = 0.5;
    const [animate, setAnimate] = useState(false);
    const [vanished, setVanished] = useState(false);

    const handleAnimation = () => {
        setAnimate((prev) => !prev);
    }

    const desplegateInfoCard = useCallback(() => {
        const menuBar = document.getElementById('menuBar');
        const menuCard = document.getElementById('menuCard');
        const menuBarBackdrop = document.getElementById('menuBar_backdrop');

        if (animate) {
            menuBar.classList.add('menuBarRezised');
        }
        else {
            menuBar.classList.remove('menuBarDesplegated');
            menuCard.classList.remove('menuCardDesplegated');
            menuBarBackdrop.classList.remove('backdrop');
        };

        setTimeout(() => {
            if (animate) {
                menuBar.classList.add('menuBarDesplegated');
                menuCard.classList.add('menuCardDesplegated');
                menuBarBackdrop.classList.add('backdrop');
            }
            else {
                menuBar.classList.remove('menuBarRezised');
            };
        }, delayAnimations * 1000);
    }, [animate]);

    const handleVanished = useCallback(() => {
        if (animate) {
            setVanished(true)
        }
        else
            setTimeout(() => {
                setVanished(false)
            }, delayAnimations * 1000);
    }, [animate]);

    useEffect(() => {
          desplegateInfoCard();
          handleVanished();
    }, [animate, desplegateInfoCard, handleVanished]);

    return (
        <Fragment>
            <div id="menuBar_backdrop"
            onClick={handleAnimation}>
                &nbsp;
            </div>

            <div id="menuBar" className="menuBar">
                <div
                className={`menuIcon ${(animate)?('menuIconActive'):('menuIcondesactive')}`}
                onClick={handleAnimation}
                style={{top: `${(animate)?('15px'):('17px')}`}} >
                    <div className="iconSection blue_section">&nbsp;</div>
                    <div className="iconSection green_section">&nbsp;</div>
                    <div className="iconSection yellow_section">&nbsp;</div>
                    <div className="iconSection red_section">&nbsp;</div>
                </div>
                <hr className={`${(vanished)?('vanished'):('')}`}
                style={{transform: `translateY(${(vanished)?('0px'):('-61px')})`}} />
                <i className={`fi fi-rr-map-marker-home icon ${(vanished)?('vanished'):('')}`}
                onClick={handleAnimation}
                style={{transform: `translateY(${(vanished)?('0px'):('-30.5px')})`}} ></i>
                <hr className={`${(vanished)?('vanished'):('')}`}
                style={{transform: `translateY(${(vanished)?('0px'):('0px')})`}} />
                <i className={`fi fi-rr-marker icon ${(vanished)?('vanished'):('')}`}
                onClick={handleAnimation}
                style={{transform: `translateY(${(vanished)?('0px'):('30.5px')})`}} ></i>
                <hr className={`${(vanished)?('vanished'):('')}`}
                style={{transform: `translateY(${(vanished)?('0px'):('61px')})`}} />
                <i className={`fi fi-rr-map-marker icon ${(vanished)?('vanished'):('')}`}
                onClick={handleAnimation}
                style={{transform: `translateY(${(vanished)?('0px'):('91.5px')})`}} ></i>
            </div>

            <div id="menuCard">
                <div className="leftDivision">&nbsp;</div>
                <div className="infoContent">
                    {Object.entries(mapMenuData).map(([key, value]) => (
                        <div className="data_label" key={key}>
                            <i className={`fi fi-rr-${value.icon}`}
                            style={{color: `${value['icon-color']}`}}></i>
                            <div className="label_container">
                                <span className="tittle_label">{value.name}:</span>
                                <span className="value_label">{value.value}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
}

const mapMenuData = {
    direction: {
        name: 'Dirección', value: 'Av. El Trébol cdra. 72',
        icon: 'map-marker-home', 'icon-color': '#4285F4',
        key: 'direction'},
    distrit: {
        name: 'Distrito', value: 'Los Olivos',
        icon: 'marker', 'icon-color': '#FBBC05',
        key: 'distrit'},
    province: {
        name: 'Provincia', value: 'Lima',
        icon: 'marker', 'icon-color': '#34A853',
        key: 'province'},
    region: {
        name: 'Región', value: 'Lima',
        icon: 'marker', 'icon-color': '#EA4335',
        key: 'region'},
    ubication: {
        name: 'Ubigeo', value: '150117',
        icon: 'map-marker', 'icon-color': '#4285F4',
        key: 'ubication'},
};