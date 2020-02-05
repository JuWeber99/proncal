import moment, {Moment} from "moment";
import React, {Dispatch, FunctionComponent, ReactNode, SetStateAction, useContext, useState} from "react";

export interface DateContext {
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

const momentProvider = moment().locale("en");

const initalContext: DateContext = {
    state: {
        dateContext: momentProvider,
        today: momentProvider.date(),
        month: momentProvider.month()+1,
        year: momentProvider.year(),
    },
    setState: {
        setDateContext: newContext => ({}),
        setToday: newDay => ({}),
        setMonth: newMonth => ({}),
        setYear: newYear => ({}),
    }
};

export const DateContext = React.createContext<DateContext>(initalContext);

export const DateContextProvider:FunctionComponent<{children: ReactNode}> = ({children}) => {
    const [value] = useState<DateContext>(initalContext);

    return (
        <DateContext.Provider
        value={value}>
            {children}
        </DateContext.Provider>
    )
};