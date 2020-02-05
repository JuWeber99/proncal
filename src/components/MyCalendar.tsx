import React, {FunctionComponent, Suspense, useContext, useEffect, useState} from 'react';
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"
import {MyEvent} from "../model/EventModel";
import {dummyData} from "../resources/hwr-wi-b-6"
import {IntraDayTimeConverter} from "../model/IntraDayTimeConverter";
import {DateContext} from "../model/DateContextProvider";
import {DateService} from "../service/DateService";
import {MonthDayDateConverter} from "../model/MonthDayDateConverter";

interface PronCalendarProps {

}

async function fetchEventData(uri: string = "http://www.test.de/api/endpunkt"): Promise<MyEvent[]> {
    return await fetch(uri).then((response => response.json().then((data: MyEvent[]) => {
        return data
    })));
}


const MyCalendar: FunctionComponent<PronCalendarProps> = () => {
    let dateContext = useContext(DateContext);
    const dateService = new DateService(dateContext.state.dateContext);

    moment.locale("de");
    console.log("currentDate SERVICE: " + dateService.currentDate());
    console.log("currentDate CONTEXT: " + dateContext.state.dateContext.date());
    console.log("first weekday of the month: " + dateService.firstDayOfMonth());
    console.log("current weekday in month: " + new MonthDayDateConverter(dateService.currentDay(), dateService.dateContext).toString());
    console.log("days in the month: " + dateService.daysInMonth());
    console.log("week range start: " + new MonthDayDateConverter(dateService.dateContext.startOf("week").weekday(), dateService.dateContext.startOf("week")));
    console.log("week range start: " + new MonthDayDateConverter(dateService.dateContext.endOf("week").weekday(), dateService.dateContext.endOf("week")));
    console.log("month-day-date: " + new MonthDayDateConverter(dateService.dateContext.date(dateContext.state.today).weekday(), dateContext.state.dateContext));
    console.log("dateContext:" + JSON.stringify(dateContext.state.dateContext));
    console.log("today:" + dateContext.state.today);
    console.log("month:" + dateContext.state.month);
    console.log("year:" + dateContext.state.year);

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

    console.log(new IntraDayTimeConverter(9, 1).toString());

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