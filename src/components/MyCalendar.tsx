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
import {json2csv} from "json-2-csv"
import {EventService} from "../EventService";

async function fetchEventData(uri: string = "http://www.test.de/api/endpunkt"): Promise<MyEvent[]> {
    return await fetch(uri).then((response => response.json().then((data: MyEvent[]) => {
        return data
    })));
}

/*function fetchData(uri: string = "https://hwr-wi-204.sagebiels.org/api/v1/events"): Promise<any> {
    /!*    const response: Promise<MyEvent[]> = axios.get("http://hwr-wi-204.sagebiels.org/api/v1/events")
                .then((response: AxiosResponse<MyEvent[]>) => response.data)
                .then((data: MyEvent[]) => {
                    return data
                });
            console.log(response.then((data) => {
                return data
            }));*!/
}*/

/*
delete: const mergeAssociatedEvents = (data: MyEvent[]): MyEvent[] => {
    data.forEach((item: MyEvent, i: number) => {
        if (i === data.length || i === 0) {
            return
        }
        while (
            (
                (data[i].summary === data[i - 1].summary)
                && (moment(data[i].dtend).date() === moment(data[i - 1].dtend).date())
            )
            ) {
            data[i - 1].dtend = data[i].dtend;
            data.splice(i, 1);
        }
    });
    return data;
};*/

const MyCalendar: FunctionComponent = () => {
        const {setEvents, events} = useContext(CalendarContext);
        const exportToLocalCsvRequest = (data: MyEvent[]) => {
            axios.request({
                method: "POST",
                url: "https://hwr-wi-204.sagebiels.org/api/v1/events/getCsv",
                data: json2csv(data, (error, csv) => {
                    console.log(error);
                    console.log(csv);
                }, {expandArrayObjects: true})
            }).then(response => response).catch((error) => error)
        };
        setEvents(EventService.mergeAssociatedEvents(events));

        useEffect(() => {
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
            console.log(events);
            return function cleanup() {
                console.log("unmount")
            };
        }, []);

        const localizer = momentLocalizer(moment);

        return (
            <Jumbotron>
                <Calendar
                    localizer={localizer}
                    events={events.map((event: MyEvent) => {
                        return {
                            allDay: false,
                            title: event.summary.replace(/\\;/g, " | "),
                            start: moment(event.dtstart).toDate(),
                            end: moment(event.dtend).toDate()
                        };
                    })}
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
            </Jumbotron>
        )
            ;
    }
;

export default MyCalendar;




