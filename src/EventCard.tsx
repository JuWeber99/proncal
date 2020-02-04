import React, {FunctionComponent} from 'react';
import { Card } from 'react-bootstrap';
import {MyEvent} from "./model/EventModel";

interface EventCardProps {
    event: MyEvent
}

const EventCard:FunctionComponent<EventCardProps> = ({event}) => {
    return (
        <Card style={{
            backgroundColor: "lightblue"
        }}>
            <Card.Body style={{
                fontWeight: "bold"
            }}>
                <Card.Text>{event.location}</Card.Text>
                <Card.Text>{event.summary.replace(/\\;/g, " | ")}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default EventCard;