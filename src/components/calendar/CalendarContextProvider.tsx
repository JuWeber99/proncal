import moment, {Moment} from "moment";
import React, {Dispatch, FunctionComponent, ReactNode, SetStateAction, useContext, useEffect, useState} from "react";
import {MyEvent} from "../../types/Event";
import axios, {AxiosError, AxiosResponse} from "axios";
import {EventService} from "../../service/EventService";

export interface CalendarContext {
    isLoading: boolean
    eventData: MyEvent[]
    dateContext: moment.Moment
    today: number
    month: number
    year: number
    error: boolean

    setIsLoading: Dispatch<SetStateAction<boolean>>
    setEventData: Dispatch<SetStateAction<MyEvent[]>>
    setDateContext: Dispatch<SetStateAction<Moment>>
    setToday: Dispatch<SetStateAction<number>>
    setYear: Dispatch<SetStateAction<number>>
    setMonth: Dispatch<SetStateAction<number>>
    setError: Dispatch<SetStateAction<boolean>>
}

const momentProvider = moment();
momentProvider.locale("de");

const initalContext: CalendarContext = {

    isLoading: false,
    eventData: [],
    dateContext: momentProvider,
    today: momentProvider.date(),
    month: momentProvider.month() + 1,
    year: momentProvider.year(),
    error: false,

    setIsLoading: newLoadingState => {
    },
    setEventData: newEvents => {
    },
    setDateContext: newContext => {
    },
    setToday: newDay => {
    },
    setMonth: newMonth => {
    },
    setYear: newYear => {
    },
    setError: error => {
    },
};

export const CalendarContext = React.createContext<CalendarContext>(initalContext);

export const CalendarContextProvider: FunctionComponent<{ children: ReactNode }> = ({children}) => {

    const [eventData, setEventData] = useState<MyEvent[]>([]);
    const [dateContext, setDateContext] = useState<Moment>(momentProvider);
    const [today, setToday] = useState<number>(momentProvider.date());
    const [month, setMonth] = useState<number>(momentProvider.month() + 1);
    const [year, setYear] = useState<number>(momentProvider.year());
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const state = {
        isLoading,
        eventData,
        dateContext,
        today,
        month,
        year,
        error
    };


    const dispatch = {
        setIsLoading,
        setEventData,
        setDateContext,
        setToday,
        setMonth,
        setYear,
        setError
    };

    const value = {...state, ...dispatch};


    useEffect(() => {
        async function fetchEventData() {
            const response: AxiosResponse<MyEvent[]> = await axios.request<MyEvent[]>({
                method: "GET",
                url: "https://hwr-wi-204.sagebiels.org/api/v1/events",
            });
            setEventData(EventService.mergeAssociatedEvents(response.data));
        }

        fetchEventData()
            .catch((error: AxiosError) => {
                setError(error.isAxiosError)
            })
    }, []);

    return (
        <CalendarContext.Provider
            value={value}>
            {children}
        </CalendarContext.Provider>
    )
};

export const useCalendarContext = (): CalendarContext => {
    return useContext<CalendarContext>(CalendarContext);
};