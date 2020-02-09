import moment, {Moment} from "moment";
import React, {Dispatch, FunctionComponent, ReactNode, SetStateAction, useContext, useEffect, useState} from "react";
import {MyEvent} from "./EventModel";
import axios, {AxiosError, AxiosResponse} from "axios";
import {EventService} from "../service/EventService";
import {DarkSideWether} from "./DarkSideWether";
import {dummyWether} from "./dummyWether";

export interface CalendarContext {
    isLoading: boolean
    eventData: MyEvent[]
    dateContext: moment.Moment
    today: number
    month: number
    year: number
    wetherData: DarkSideWether

    setIsLoading: Dispatch<SetStateAction<boolean>>
    setEventData: Dispatch<SetStateAction<MyEvent[]>>
    setDateContext: Dispatch<SetStateAction<Moment>>
    setToday: Dispatch<SetStateAction<number>>
    setYear: Dispatch<SetStateAction<number>>
    setMonth: Dispatch<SetStateAction<number>>
    setWetherData: Dispatch<SetStateAction<DarkSideWether>>
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
    wetherData: dummyWether,

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
    setWetherData: newWetherData => {

    }
};

export const CalendarContext = React.createContext<CalendarContext>(initalContext);

export const DateContextProvider: FunctionComponent<{ children: ReactNode }> = ({children}) => {

    const [eventData, setEventData] = useState<MyEvent[]>([]);
    const [dateContext, setDateContext] = useState<Moment>(momentProvider);
    const [today, setToday] = useState<number>(momentProvider.date());
    const [month, setMonth] = useState<number>(momentProvider.month() + 1);
    const [year, setYear] = useState<number>(momentProvider.year());
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [wetherData, setWetherData] = useState<DarkSideWether>(dummyWether);

    const state = {
        isLoading,
        eventData,
        dateContext,
        today,
        month,
        year,
        wetherData
    };


    const dispatch = {
        setIsLoading,
        setEventData,
        setDateContext,
        setToday,
        setMonth,
        setYear,
        setWetherData
    };

    const value = {...state, ...dispatch};


    useEffect(() => {
        //TODO generify
        async function fetchDataEventData() {
            const response: AxiosResponse<MyEvent[]> = await axios.request<MyEvent[]>({
                method: "GET",
                url: "https://hwr-wi-204.sagebiels.org/api/v1/events",
            });
            console.log(response);
            setEventData(EventService.mergeAssociatedEvents(response.data));
        }

        fetchDataEventData().catch((error: AxiosError) => {
            console.log(error)
        });

        async function fetchWetherData() {
            const response: AxiosResponse<DarkSideWether> = await axios.request<DarkSideWether>({
                method: "GET",
                url: "https://api.darksky.net/forecast/343201781aa363c6c7b72159954bcd8a/52.5,13.41667",
            });
            console.log(response);
            setWetherData(response.data)
        }

        fetchWetherData().catch((error: AxiosError) => {
            console.log(error)
        });
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