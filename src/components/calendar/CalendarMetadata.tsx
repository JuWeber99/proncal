import React, {useEffect, useState} from 'react';
import {useCalendarContext} from "../../model/DateContextProvider";
import moment, {Moment} from "moment";

export const CalendarMetadata = () => {
    const {eventData, isLoading} = useCalendarContext();
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
        if (eventData[0] !== undefined) {
            setSemesterStart(moment(eventData[0].dtstart));
            setSemesterEnd(moment(eventData[eventData.length - 1].dtend));
            setSemesterTimeLeft(moment(eventData[eventData.length - 1].dtend).from(moment(eventData[0].dtstart), true))
        }
    }, [isLoading, eventData]);

    return (
        <div>
            {console.log("paint meta")}
            {console.log(semesterTimeLeft)}
            {
                (!isLoading && semesterEnd !== undefined && semesterStart !== undefined) &&
                <div className={"calendar-metadata-container"}>
                    <h5>Semesterstart: <b>{semesterStart?.format("DD.MM.YYYY")}</b></h5> |
                    <h5>Semesterende: <b>{semesterEnd?.format("DD.MM.YYYY")}</b></h5> |
                    <h5>Zeit bis zum Semesterende: <b>{semesterTimeLeft}</b></h5>
                    {/*<p>{moment.duration(moment(eventData[0].dtend).diff(eventData[0].dtstart)).asHours()}</p>*/}
                </div>
            }
        </div>
    );
};
