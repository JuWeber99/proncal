import React, {useEffect, useState} from 'react';
import {useCalendarContext} from "../../model/DateContextProvider";
import moment, {Moment} from "moment";

export const CalendarMetadata = () => {
    const {eventData, isLoading} = useCalendarContext();
    const [semesterStart, setSemesterStart] = useState<Moment>();
    const [semesterEnd, setSemesterEnd] = useState<Moment>();
    const [semesterTimeLeft, setSemesterTimeLeft] = useState<string>();

    useEffect(() => {
        if (eventData[0] !== undefined) {
            setSemesterStart(moment(eventData[0].dtstart));
            setSemesterEnd(moment(eventData[eventData.length - 1].dtend));
            setSemesterTimeLeft(moment(eventData[eventData.length - 1].dtend).from(moment(eventData[0].dtstart), true))
        }
    }, [isLoading, eventData]);

    return (
        <div>
            {
                (!isLoading && semesterEnd !== undefined && semesterStart !== undefined) &&
                <div className={"calendar-metadata-container"}>
                    <h5>Semesterstart: <b>{semesterStart?.format("DD.MM.YYYY")}</b></h5>
                    <h5>Semesterende: <b>{semesterEnd?.format("DD.MM.YYYY")}</b></h5>
                    <h5>Zeit bis zum Semesterende: <b>{semesterTimeLeft}</b></h5>
                </div>
            }
        </div>
    );
};
