import React, {FunctionComponent} from 'react';
import {EventProps} from "react-big-calendar"


const EventCard:FunctionComponent<EventProps> = (props: EventProps) => {
    return (
                <>{props.title}</>
    );
};

export default EventCard;