import React, {FunctionComponent} from 'react';
import {EventProps} from "react-big-calendar"


export const EventCard:FunctionComponent<EventProps> = (props: EventProps) => {
    return (
                <div className={"event-card"}>
                    {props.title}
                </div>
    );
};
