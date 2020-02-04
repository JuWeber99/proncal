import React, {FunctionComponent, Suspense, useEffect, useState} from 'react';
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"
import {MyEvent} from "./EventModel";
import {dummyData} from "./hwr-wi-b-6"

interface PronCalendarProps {

}

async function fetchEventData(uri: string = "http://www.test.de/api/endpunkt"): Promise<MyEvent[]> {
    return await fetch(uri).then((response => response.json().then((data: MyEvent[]) => {
        return data
    })));
}


const MyCalendar: FunctionComponent<PronCalendarProps> = () => {

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
        /*    setEventData(fetchEventData("test").then((data: MyEvent[]) => {
                return data
            }));*/
        setEventData(dummyData.vcalendar.vevent);
        console.log(JSON.stringify(eventData))
    }, []);

    const dummy: MyEvent[] =
        [{
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
        }];

    const localizer = momentLocalizer(moment);

    return (
        <Suspense fallback={<p> Loading </p>}>
            <Calendar
                localizer={localizer}
                events={eventData.map((event: MyEvent) => {
                    const parsed = {
                        allDay: false,
                        title: event.summary.replace(/\\;/g, " | "),
                        start: moment(event.dtstart).toDate(),
                        end: moment(event.dtend).toDate()
                    };
                    console.log(event.dtstart.substring(0, 4) + " " + event.dtstart.substring(4, 6) + " " + event.dtstart.substring(6, 8) + " " + event.dtstart.substring(9, 11) + " " + event.dtstart.substring(11, 13));
                    return parsed;
                })}
                defaultView={"week"}
                views={["day", "week", "agenda"]}
                endAccessor={"end"}
                startAccessor={"start"}
            />
        </Suspense>

    );
};

export default MyCalendar;