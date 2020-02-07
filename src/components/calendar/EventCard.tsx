import React, {FunctionComponent} from 'react';
import {Badge, Card} from 'react-bootstrap';
import  {EventProps} from "react-big-calendar"


const EventCard:FunctionComponent<EventProps> = (props: EventProps) => {
    return (
        <div style={{
            display: "flex",
            textAlign: "match-parent",
        }}>
                <p>{props.title}</p>
        </div>
    );
};

export default EventCard;