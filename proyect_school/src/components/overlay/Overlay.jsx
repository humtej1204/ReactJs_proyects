import React, {
    useState, useCallback,
    useEffect, useContext,
} from "react";
import { PopUpContext } from '../../contexts/contextos/PopUpContext';

/* Styles */
import './Overlay.scss';

export function Overlay() {
    const { popupState, closePopup } = useContext(PopUpContext);

    if (!popupState) {
        return null;
    }

    return (
        <section className={`${popupState ? 'animationOpen overlay-component' : 'animationClose'}`}>
            <button onClick={closePopup}>Cerrar</button>
        </section>
    );
}