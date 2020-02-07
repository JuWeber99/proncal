import moment, {Moment} from "moment";
import React, {Dispatch, FunctionComponent, ReactNode, SetStateAction, useState} from "react";
import {dummyData} from "../resources/hwr-wi-b-6";
import {MyEvent} from "./EventModel";

export interface CalendarContext {
    events: MyEvent[]
    dateContext: moment.Moment
    today: number
    month: number
    year: number

    setEvents: Dispatch<SetStateAction<MyEvent[]>>
    setDateContext: Dispatch<SetStateAction<Moment>>
    setToday: Dispatch<SetStateAction<number>>
    setYear: Dispatch<SetStateAction<number>>
    setMonth: Dispatch<SetStateAction<number>>
}

const momentProvider = moment();
momentProvider.locale("de");

const initalContext: CalendarContext = {

    events: [],
    dateContext: momentProvider,
    today: momentProvider.date(),
    month: momentProvider.month() + 1,
    year: momentProvider.year(),

    setEvents: newEvents => {},
    setDateContext: newContext => {},
    setToday: newDay => {},
    setMonth: newMonth => {},
    setYear: newYear => {},
};

export const CalendarContext = React.createContext<CalendarContext>(initalContext);

export const DateContextProvider: FunctionComponent<{ children: ReactNode }> = ({children}) => {

    const [events, setEvents] = useState<MyEvent[]>(dummyData.vcalendar.vevent);
    const [dateContext, setDateContext] = useState<Moment>(momentProvider);
    const [today, setToday] = useState<number>(momentProvider.date());
    const [month, setMonth] = useState<number>(momentProvider.month() + 1 );
    const [year, setYear] = useState<number>(momentProvider.year());

    const state = {
      events,
      dateContext,
      today,
      month,
      year
    };


    const dispatch = {
      setEvents,
      setDateContext,
      setToday,
      setMonth,
      setYear
    };

    const value = {...state,...dispatch};

    return (
        <CalendarContext.Provider
            value={value}>
            {children}
        </CalendarContext.Provider>
    )
};