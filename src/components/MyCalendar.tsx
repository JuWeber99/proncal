import React, {FunctionComponent, useEffect, useState} from 'react';
import {Calendar, Event, EventProps, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"
import {useCalendarContext} from "../model/DateContextProvider";
import "./customCalendar.sass"
import "moment/locale/de"
import {Jumbotron} from "react-bootstrap"
import EventCard from "./calendar/EventCard";
import {EventService} from "../service/EventService";


const MyCalendar: FunctionComponent = () => {
    const {isLoading, setEventData, eventData} = useCalendarContext();
    const localizer = momentLocalizer(moment);
    const [transformedEvents, setTransformedEvent] = useState<Event[] | undefined >(undefined);


    useEffect(() => {
        console.log("calendar update");
        return () => console.log("calendar cleanup")
    });

    useEffect(() => {
        setTransformedEvent(EventService.transformToApiEvent (eventData))
    }, [eventData]);

    return (
       /* isLoading ? (
                <React.Fragment>
                    {console.log("paint progress bar")}
                    <ProgressBar/>
                </React.Fragment>
            )
            :*/
            <div>
                {console.log("paint calendar")}
                {
                    transformedEvents &&
                    <Calendar
                        localizer={localizer}
                        events={transformedEvents}
                        defaultView={"week"}
                        views={["day", "week"]}
                        endAccessor={"end"}
                        startAccessor={"start"}
                        timeslots={12}
                        step={5}
                        min={new Date(1, 1, 1, 8)}
                        max={new Date(1, 1, 1, 22)}
                        components={{
                            event: ((event: EventProps) => EventCard(event)),
                            eventContainerWrapper:
                                (props) => <>{props.children}</>
                        }}
                    />
                }
            </div>
    );
};

export default MyCalendar;




