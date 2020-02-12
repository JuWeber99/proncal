import React, {FunctionComponent, useEffect, useState} from 'react';
import {Calendar, Event, EventProps, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"
import {useCalendarContext} from "./CalendarContextProvider";
import "../../styles/customCalendar.sass"
import "moment/locale/de"
import "../../styles/app.sass"
import {EventService} from "../../service/EventService";
import {EventCard} from "./EventCard";
import {WeatherInformation} from "../Weather/WeatherInformation";
import {ProgressBar} from "react-bootstrap";


export const MyCalendar: FunctionComponent = () => {
    const {eventData, dateContext} = useCalendarContext();
    const localizer = momentLocalizer(moment);
    const [transformedEvents, setTransformedEvent] = useState<Event[] | undefined>(undefined);

    useEffect(() => {
        setTransformedEvent(EventService.transformToApiEvent(eventData))
    }, [eventData]);

    return (
        <div>
            {
                transformedEvents ?
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
                        timeGutterHeader: () => null,
                        week: {
                            header: (props: any) => {
                                if (moment(props.date).week() === dateContext.week()) {
                                    return (
                                        <div className={"rbc-header"}>
                                            <WeatherInformation label={props.label} date={props.date}/>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div>
                                            {props.label}
                                            <p className={"weather-forecast-not"}>Voraussage
                                                in: {moment.duration(moment(props.date).diff(dateContext)).asDays().toFixed(0) + " "}
                                                Tagen
                                            </p>
                                        </div>
                                    )
                                }
                            }
                        },
                    }}/>
                    :
                    <ProgressBar variant={"info"} animated/>


            }

        </div>
    );
};





