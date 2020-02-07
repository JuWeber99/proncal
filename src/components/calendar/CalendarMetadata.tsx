import React, {useContext} from 'react';
import {CalendarContext} from "../../model/DateContextProvider";
import moment from "moment";
import {MyEvent} from "../../model/EventModel";

const CalendarMetadata = () => {
    const calendarContext = useContext<CalendarContext>(CalendarContext);
    const tomorrow = calendarContext.dateContext.date(calendarContext.dateContext.date()).subtract(1, "week");
    const semesterStartMoment = moment(calendarContext.events[0].dtstart);
    const semesterEndMoment = moment(calendarContext.events[calendarContext.events.length - 1].dtend);
    const semesterDaysLeft = semesterEndMoment.from(semesterStartMoment, true);

    const calculateWeeklyHours = (eventData: MyEvent[]): number => {
        let weekMinutes: number = 0;
        for (let i = 1; i < eventData.length; i++) {
            if (moment(eventData[i].dtend).isoWeek() === moment(eventData[i - 1].dtstart).isoWeek()) {
                weekMinutes += moment.duration(moment(calendarContext.events[i - 1].dtend).diff(calendarContext.events[i - 1].dtstart)).asMinutes()
            }
        }
        return weekMinutes / 60;
    };

    return (
        <div>
            <p>{semesterStartMoment.format("DD.MM.YYYY")}</p>
            <p>{semesterEndMoment.format("DD.MM.YYYY")}</p>
            <p>{semesterDaysLeft}</p>
            <p>{calculateWeeklyHours(calendarContext.events)}</p>
            <p>{moment.duration(moment(calendarContext.events[0].dtend).diff(calendarContext.events[0].dtstart)).toISOString()}</p>
        </div>
    );
};

export default CalendarMetadata;