import moment, {Moment} from "moment";
import React, {Dispatch, FunctionComponent, ReactNode, SetStateAction, useContext, useEffect, useState} from "react";
import {MyEvent} from "./EventModel";
import axios, {AxiosError, AxiosResponse} from "axios";
import {EventService} from "../service/EventService";
import {DarkSideWether, DarkSideWetherResponse} from "./DarkSideWether";
import {dummyWether} from "./dummyWether";

export interface CalendarContext {
    isLoading: boolean
    eventData: MyEvent[]
    dateContext: moment.Moment
    today: number
    month: number
    year: number
    wetherData: DarkSideWetherResponse

    setIsLoading: Dispatch<SetStateAction<boolean>>
    setEventData: Dispatch<SetStateAction<MyEvent[]>>
    setDateContext: Dispatch<SetStateAction<Moment>>
    setToday: Dispatch<SetStateAction<number>>
    setYear: Dispatch<SetStateAction<number>>
    setMonth: Dispatch<SetStateAction<number>>
    setWetherData: Dispatch<SetStateAction<DarkSideWetherResponse>>
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
    const [wetherData, setWetherData] = useState<DarkSideWetherResponse>(dummyWether);

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

        async function fetchWetherData() {
            const response: AxiosResponse<DarkSideWetherResponse> = await axios.request<DarkSideWetherResponse>({
                url: "http://localhost:8080/api/weather/forecast",
                method: "GET"
            });
            console.log(response.data);
            setWetherData(response.data)
        }

       /* Promise.all([fetchDataEventData(), fetchWetherData()])*/
            fetchDataEventData().catch((error: AxiosError) => {
                console.log(error)
            }).then(() => fetchWetherData().catch((error: AxiosError) => {
                console.log(error)
            }));
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