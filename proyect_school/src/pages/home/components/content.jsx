// import React, { Fragment } from "react";

/* Components */
import { AboutSection } from './aboutSection';
import { OpinionComponent } from './opinionComponent';
import { EventSection } from './eventSection';


/* Styles */
import './content.scss';

/* Info Test */
import { opinions } from './opinionInfo';
import { events } from './eventsInfo';

export function Content() {
    return (
        <div className="homeContent">
            <AboutSection />
            <OpinionComponent
                opinions={opinions}
            />
            <EventSection
                events={events}
            />
        </div>
    );
}