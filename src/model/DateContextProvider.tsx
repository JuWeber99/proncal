import moment, {Moment} from "moment";
import React, {
    Dispatch,
    FunctionComponent,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState,
    Suspense
} from "react";
import {dummyData} from "../resources/hwr-wi-b-6";
import {HwrCalendarFormat, MyEvent} from "./EventModel";
import axios, {AxiosError, AxiosResponse} from "axios";
import {EventService} from "../service/EventService";
import {ProgressBar} from "react-bootstrap";

export interface CalendarContext {
    isLoading: boolean
    eventData: MyEvent[]
    dateContext: moment.Moment
    today: number
    month: number
    year: number

    setIsLoading: Dispatch<SetStateAction<boolean>>
    setEventData: Dispatch<SetStateAction<MyEvent[]>>
    setDateContext: Dispatch<SetStateAction<Moment>>
    setToday: Dispatch<SetStateAction<number>>
    setYear: Dispatch<SetStateAction<number>>
    setMonth: Dispatch<SetStateAction<number>>
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
};

export const CalendarContext = React.createContext<CalendarContext>(initalContext);

export const DateContextProvider: FunctionComponent<{ children: ReactNode }> = ({children}) => {

    const [eventData, setEventData] = useState<MyEvent[]>([]);
    const [dateContext, setDateContext] = useState<Moment>(momentProvider);
    const [today, setToday] = useState<number>(momentProvider.date());
    const [month, setMonth] = useState<number>(momentProvider.month() + 1);
    const [year, setYear] = useState<number>(momentProvider.year());
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const state = {
        isLoading,
        eventData,
        dateContext,
        today,
        month,
        year
    };


    const dispatch = {
        setIsLoading,
        setEventData,
        setDateContext,
        setToday,
        setMonth,
        setYear
    };

    const value = {...state, ...dispatch};


    useEffect(() => {
        console.log("provider update");
        return () => console.log("provider cleanup")
    });


    useEffect(() => {
        async function fetchData() {
            const response: AxiosResponse<MyEvent[]> = await axios.request<MyEvent[]>({
                method: "GET",
                url: "https://hwr-wi-204.sagebiels.org/api/v1/events",
            });
            console.log(response);
            setEventData(EventService.mergeAssociatedEvents(response.data));
        }

        fetchData().catch((error: AxiosError) => {
            console.log(error)
        });
        return function cleanup() {
            console.log("unmount")
        };
    }, []);

    return (
        <CalendarContext.Provider
            value={value}>
            {children}
            {console.log("paint provider")}
        </CalendarContext.Provider>
    )
};

export const useCalendarContext = (): CalendarContext => {
    return useContext<CalendarContext>(CalendarContext);
};