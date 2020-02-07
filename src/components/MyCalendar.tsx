import React, {FunctionComponent, useContext, useEffect} from 'react';
import {Calendar, EventProps, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"
import {MyEvent} from "../model/EventModel";
import {CalendarContext} from "../model/DateContextProvider";
import "./customCalendar.sass"
import axios, {AxiosError, AxiosResponse} from "axios"
import "moment/locale/de"
import {Jumbotron} from "react-bootstrap"
import EventCard from "./calendar/EventCard";
import {EventService} from "../service/EventService";
import {render} from "react-dom";


const MyCalendar: FunctionComponent = () => {
        const {setEvents, events} = useContext(CalendarContext);
        const localizer = momentLocalizer(moment);

        setEvents(EventService.mergeAssociatedEvents(events));

        useEffect(() => {
            console.log("render");
            const response: Promise<MyEvent[]> = axios(
                {
                    method: "GET",
                    url: "https://hwr-wi-204.sagebiels.org/api/v1/events",
                    baseURL: "https://hwr-wi-204.sagebiels.org/api/v1/",
                })
                .then((response: AxiosResponse<any>) => {
                    console.log(response.status);
                    console.log(response.data);
                    return response.data
                }).catch((error: AxiosError) => console.log(error.response));
            console.log(response);
            return function cleanup() {
                console.log("unmount")
            };
        }, []);

        return (
            <Jumbotron>
                <Calendar
                    localizer={localizer}
                    events={EventService.transformToApiEvent(events)}
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
                {console.log(events)}
            </Jumbotron>
        )
            ;
    }
;

export default MyCalendar;




