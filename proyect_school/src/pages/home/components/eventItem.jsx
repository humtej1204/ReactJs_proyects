/* Styles */
import './eventItem.scss';

export function EventItem({ img, eventName, description }) {
    return (
        <div className='eventItem'>
            <img src={img} alt="" />
            <div className='eventContent'>
                <h3>{eventName}</h3>
                <p>{description}</p>
                <a href='#'>
                    <i className="fi fi-sr-chevron-double-down" />
                </a>
            </div>
        </div>
    );
}