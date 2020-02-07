import React, {useContext} from 'react';
import {CalendarContext} from "../../model/DateContextProvider";
import {dummyData} from "../../resources/hwr-wi-b-6";
import moment from "moment";
import {MyEvent} from "../../model/EventModel";

const CalendarMetadata = () => {
    const calendarContext = useContext<CalendarContext>(CalendarContext);
    const tomorrow = calendarContext.state.dateContext.date(calendarContext.state.dateContext.date()).subtract(1, "week");
    console.log(tomorrow);
    console.log(calendarContext.state.dateContext.date());

    const semesterStartMoment = moment(dummyData.vcalendar.vevent[0].dtstart);
    const semesterEndMoment = moment(dummyData.vcalendar.vevent[dummyData.vcalendar.vevent.length - 1].dtend);
    const semesterDaysLeft = semesterEndMoment.from(semesterStartMoment, true);

    const calculateWeeklyHourse = (eventData: MyEvent[]) => {
        let weekMinutes = 0;
        for (let i = 0; i < eventData.length; i++) {
            if (moment(eventData[i].dtend).isoWeek() === moment(eventData[i - 1].dtstart).isoWeek()) {
                weekMinutes += moment.duration(moment(dummyData.vcalendar.vevent[0].dtend).diff(dummyData.vcalendar.vevent[0].dtstart)).asMinutes()
            }
        }
    };

    return (
        <div>
            <p>{semesterStartMoment.format("DD.MM.YYYY")}</p>
            <p>{semesterEndMoment.format("DD.MM.YYYY")}</p>
            <p>{semesterDaysLeft}</p>
            <p>{moment.duration(moment(dummyData.vcalendar.vevent[0].dtend).diff(dummyData.vcalendar.vevent[0].dtstart)).toISOString()}</p>
        </div>
    );
};

export default CalendarMetadata;