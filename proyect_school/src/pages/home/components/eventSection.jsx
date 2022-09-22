import { NavLink } from "react-router-dom";

/* Styles */
import './eventSection.scss';

/* Components */
import { EventItem } from './eventSectionComponents/eventItem';

export function EventSection({ events }) {
    return (
        <div className="eventSection">
            <div className='eventsContainer'>
                <h3>EVENTOS REALIZADOS EN LA INSTITUCIÓN</h3>
                <p>Nuestra Institucion formeta a los alumnos a participar en las diversas actividades en fechas especiales para que puedan demostrar sus talentos y poder desenvolverse... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className='eventsItems'>
                    {events.map((item, index) => (
                        <EventItem
                            img={item.img}
                            eventName={item.eventName}
                            description={item.description}
                            key={index}
                        />
                    ))}
                </div>
                <NavLink to="/institucion">Ver todos</NavLink>
            </div>
        </div>
    );
}