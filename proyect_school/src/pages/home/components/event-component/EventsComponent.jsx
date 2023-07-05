import React, { useEffect, useState } from "react";

/* Styles */
import './EventsComponent.scss';

export function EventsComponent({ events }) {
    const [mainEvent, setMainEvent] = useState(events[0]);
    const [selected, setSelected] = useState(0);

    const changeMainInfo = (elemIndex) => {
        setMainEvent(events[elemIndex]);
        setSelected(elemIndex);
    }

    useEffect(() => {
        document.getElementById('mainEvent').classList.remove('event_data_animation');

        setTimeout(() => {
            document.getElementById('mainEvent').classList.add('event_data_animation');
        }, 500)
    }, [selected]);

    return (
        <div className='eventsItems'>
            <div id="mainEvent" className="event_main_container">
                <img src={mainEvent.img} alt={mainEvent.eventName}
                className="selected_item_img"/>
                <section className="event_data_container">
                    <span>{mainEvent.creation_date}</span>
                    <h2>{mainEvent.eventName}</h2>

                    <p>{mainEvent.description}</p>

                    <a className="btn_moreInfo"
                    href={"/eventos/" + mainEvent.id}>Mas información</a>
                </section>
            </div>

            <div className="events_container">
                <div className="events_carrusel_container">
                    {events.map((item, index) => (
                        <img className={(selected === index)?('img_selected'):('img_noSelected')}
                            onClick={() => changeMainInfo(index)}
                            src={item.img}
                            key={"index_event_item" + index}
                            alt={item.eventName}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}