import moment, {Moment} from "moment";
import React, {Dispatch, FunctionComponent, ReactNode, SetStateAction, useState} from "react";

export interface CalendarContext {
    state: {
        dateContext: moment.Moment
        today: number
        month: number
        year: number
    }
    setState: {
        setDateContext: Dispatch<SetStateAction<Moment>>
        setToday: Dispatch<SetStateAction<Date>>
        setYear: Dispatch<SetStateAction<Date>>
        setMonth: Dispatch<SetStateAction<Date>>
    }
}

const momentProvider = moment();
momentProvider.locale("de");

const initalContext: CalendarContext = {
    state: {
        dateContext: momentProvider,
        today: momentProvider.date(),
        month: momentProvider.month() + 1,
        year: momentProvider.year(),
    },
    setState: {
        setDateContext: newContext => ({}),
        setToday: newDay => ({}),
        setMonth: newMonth => ({}),
        setYear: newYear => ({}),
    }
};

export const CalendarContext = React.createContext<CalendarContext>(initalContext);

export const DateContextProvider: FunctionComponent<{ children: ReactNode }> = ({children}) => {
    const [value] = useState<CalendarContext>(initalContext);

    return (
        <CalendarContext.Provider
            value={value}>
            {children}
        </CalendarContext.Provider>
    )
};