import React, {FunctionComponent, Suspense, useContext, useEffect, useState} from 'react';
import {Calendar, EventProps, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"
import {MyEvent} from "../model/EventModel";
import {CalendarContext} from "../model/DateContextProvider";
import "./customCalendar.sass"
import axios, {AxiosError, AxiosResponse} from "axios"
import {dummyData} from "../resources/hwr-wi-b-6";
import "moment/locale/de"
import {Jumbotron} from "react-bootstrap"
import EventCard from "./calendar/EventCard";
import {json2csv} from "json-2-csv"

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

const mergeAssociatedEvents = (data: MyEvent[]): void => {
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
};

const MyCalendar: FunctionComponent = () => {
        const calendarContext = useContext<CalendarContext>(CalendarContext);
        const tomorrow = calendarContext.state.dateContext.date(calendarContext.state.dateContext.date()).subtract(1, "week");
        console.log(tomorrow);
        console.log(calendarContext.state.dateContext.date());

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

        const [eventData, setEventData] = useState<MyEvent[]>([{
            dtstamp: "20200202T201126Z",
            transp: "OPAQUE",
            sequence: 0,
            uid: "sked.de937323",
            summary: "PC\\;WI-204 Vert.- E-Business\\;Prof. Dr. Resch",
            location: "CL: 6B.368 (WIL3)",
            description: "WI-204 Vert.- E-Business " +
                "Dozent: Prof. Dr. Resch\\nRaum: CL: 6B.368 (WIL3)",
            dtstart: "20200203T094500",
            dtend: "20200203T111500",
            priority: 5,
            class: "PUBLIC"
        }]);


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

            let data = dummyData.vcalendar.vevent;
            mergeAssociatedEvents(data);
            setEventData(data);
        }, []);

        const localizer = momentLocalizer(moment);

        return (
            <Suspense fallback={<p>Load</p>}>
                <Jumbotron>
                    <Calendar
                        localizer={localizer}
                        events={eventData.map((event: MyEvent) => {
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
            </Suspense>
        )
            ;
    }
;

export default MyCalendar;




