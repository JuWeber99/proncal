import React, {useContext, useEffect} from 'react';
import {CalendarContext} from "../../model/DateContextProvider";
import moment from "moment";

const CalendarMetadata = () => {
    const {events, setEvents} = useContext(CalendarContext);
    const semesterStartMoment = moment(events[0].dtstart);
    const semesterEndMoment = moment(events[events.length - 1].dtend);
    const semesterTimeLeft = semesterEndMoment.from(semesterStartMoment, true);

    const calculateWeeklyHours = (): number => {
        let weekMinutes: number = 0;
        for (let i = 1; i < events.length; i++) {
            if (moment(events[i].dtend).isoWeek() === moment(events[i - 1].dtstart).isoWeek()) {
                const duration = (moment.duration(moment(events[i - 1].dtend).diff(events[i - 1].dtstart)).asHours())
            }
        }
        return weekMinutes / 60;
    };

    useEffect(() => {
        console.log("mount meta");
        return function cleanup() {
            console.log("unmount meta")
        }
    },[]);

    return (
        <div>
            <h3>Start des Semesters: {semesterStartMoment.format("DD.MM.YYYY")}</h3>
            <h3>Ende des Semesters: {semesterEndMoment.format("DD.MM.YYYY")}</h3>
            <h3> Zeit bis zum Semesterende: {semesterTimeLeft}</h3>
            <p>{calculateWeeklyHours()}</p>
            <p>{moment.duration(moment(events[0].dtend).diff(events[0].dtstart)).asHours()}</p>
            {console.log(events)}
        </div>
    );
};

export default CalendarMetadata;