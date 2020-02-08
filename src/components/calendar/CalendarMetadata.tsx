import React, {useContext, useEffect, useState} from 'react';
import {CalendarContext, useCalendarContext} from "../../model/DateContextProvider";
import moment, {Moment} from "moment";

const CalendarMetadata = () => {
    const {eventData, setEventData} = useCalendarContext()
    ;
    const [semesterStart, setSemesterStart] = useState<Moment>();
    const [semesterEnd, setSemesterEnd] = useState<Moment>();
    const [semesterTimeLeft, setSemesterTimeLeft] = useState<string>();

    const calculateWeeklyHours = (): number => {
        let weekMinutes: number = 0;
        for (let i = 1; i < eventData.length; i++) {
            if (moment(eventData[i].dtend).isoWeek() === moment(eventData[i - 1].dtstart).isoWeek()) {
                const duration = (moment.duration(moment(eventData[i - 1].dtend).diff(eventData[i - 1].dtstart)).asHours())
            }
        }
        return weekMinutes / 60;
    };

    useEffect(() => {
        if (eventData) {
            setSemesterStart(moment(eventData[0].dtstart));
            setSemesterEnd(moment(eventData[eventData.length - 1].dtend));
            setSemesterTimeLeft(semesterEnd?.from(semesterStart, true));
            console.log(eventData)
        }
    }, [eventData]);


    useEffect(() => {
        console.log("update meta");
        return function cleanup() {
            console.log("cleanup meta")
        }
    });

    return (
        <div>
            {console.log("paint meta")}
            <h3>Start des Semesters: {semesterStart?.format("DD.MM.YYYY")}</h3>
            <h3>Ende des Semesters: {semesterEnd?.format("DD.MM.YYYY")}</h3>
            <h3> Zeit bis zum Semesterende: {semesterTimeLeft}</h3>
            <p>{calculateWeeklyHours()}</p>
            <p>{moment.duration(moment(eventData[0].dtend).diff(eventData[0].dtstart)).asHours()}</p>
        </div>
    );
};

export default CalendarMetadata;