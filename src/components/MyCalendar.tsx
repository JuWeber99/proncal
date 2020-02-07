import React, {FunctionComponent, Suspense, useContext, useEffect, useState} from 'react';
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"
import {MyEvent} from "../model/EventModel";
import {IntraDayTimeConverter} from "../model/IntraDayTimeConverter";
import {CalendarContext} from "../model/DateContextProvider";
import "./customCalendar.sass"
import axios, {AxiosError, AxiosResponse} from "axios"
import {dummyData} from "../resources/hwr-wi-b-6";

async function fetchEventData(uri: string = "http://www.test.de/api/endpunkt"): Promise<MyEvent[]> {
    return await fetch(uri).then((response => response.json().then((data: MyEvent[]) => {
        return data
    })));
}

function fetchData(uri: string = "https://hwr-wi-204.sagebiels.org/api/v1/events"): Promise<any> {
    const response = fetch(uri).then((response) => response.json()).catch((error) => console.log(error))
    return response;
}

const MyCalendar: FunctionComponent = () => {
        const calendarContext = useContext<CalendarContext>(CalendarContext);
        const tomorrow = calendarContext.state.dateContext.date(calendarContext.state.dateContext.date()).subtract(1, "week");
        console.log(tomorrow);
        console.log(calendarContext.state.dateContext.date());

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
            const response: Promise<MyEvent[]> = axios.get("http://hwr-wi-204.sagebiels.org/api/v1/events")
                .then((response: AxiosResponse<MyEvent[]>) => response.data)
                .then((data: MyEvent[]) => {
                    return data
                });
            console.log(response.then((data) => {
                return data
            }));
            let data = dummyData.vcalendar.vevent;
            data.forEach((item: MyEvent, i: number) => {
                if (i === data.length || i === 0) {
                    return
                }
                while (
                    (
                        (data[i].description === data[i - 1].description)
                        && (moment(data[i].dtend).date() === moment(data[i - 1].dtend).date())
                    )
                    ) {
                    data[i - 1].dtend = data[i].dtend;
                }
            });
            setEventData(data);
            console.log(JSON.stringify(dummyData.vcalendar.vevent))
        }, []);

        const localizer = momentLocalizer(moment);

        console.log(new IntraDayTimeConverter(9, 1).toString());

        return (
            <Suspense fallback={<p> Loading </p>}>
                <div style={{
                    margin: "5vmin",
                    border: "2px solid rgba(0,13,150,0.8)",
                    padding: "5vmin",
                    borderRadius: "10px",
                    boxShadow: "0px 0px 25px 1px"
                }}>
                    <Calendar
                        localizer={localizer}
                        events={eventData.map((event: MyEvent) => {
                            const parsed = {
                                allDay: false,
                                title: event.summary.replace(/\\;/g, " | "),
                                start: moment(event.dtstart).toDate(),
                                end: moment(event.dtend).toDate()
                            };
                            return parsed;
                        })}
                        defaultView={"week"}
                        views={["day", "week", "agenda"]}
                        endAccessor={"end"}
                        startAccessor={"start"}
                    />
                </div>
            </Suspense>
        )
            ;
    }
;

export default MyCalendar;