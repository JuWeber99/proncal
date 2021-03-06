import React, {FunctionComponent, useEffect, useState} from 'react';
import {DailyWetherMeta, DarkSideWetherResponse} from "../../types/DarkSideWether";
import moment from "moment";
import Axios, {AxiosError} from "axios"
import {Spinner} from 'react-bootstrap';
import {TemperatureDisplay} from "./TemperatureDisplay";
import {WeatherIcon} from "./WeatherIcon";
import {FetchingError} from "../ui/FetchingError";


export interface WeatherHeaderProps {
    label: string,
    date: Date
}

export const WeatherInformation: FunctionComponent<WeatherHeaderProps> = ({label, date}) => {

    const [todayWeather, setTodayWeather] = useState<undefined | DailyWetherMeta[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const [requestCount, setRequestCount] = useState<number>(0); // for not passing the 1000 call limit

    useEffect(() => {
        async function fetchData() {
            const response = await Axios.get<DarkSideWetherResponse>(
                "https://proncal-weather-api.dns-cloud.net/" + moment(date).unix()
            );
            setTodayWeather(response.data.daily.data);
            setRequestCount(Number(response.headers.get("X-Forecast-API-Calls")))
        }

        if (requestCount < 995) {
            fetchData()
                .catch((error: AxiosError) => setIsError(error.isAxiosError))
                .finally(() => setIsLoading(false));
        } else {
            setIsError(true);
            setIsLoading(false);
        }
    }, [requestCount, date]);


    return (
        <div>
            {isLoading && todayWeather === undefined ?
                <React.Fragment>
                    {label}
                    <Spinner animation={"grow"} variant={"dark"}/>
                </React.Fragment>
                :
                (
                    isError ?
                        <React.Fragment>
                            {label}
                            <FetchingError/>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <div
                                style={{
                                    display: "inline-block",
                                    flexDirection: "row",
                                    margin: "5px"
                                }}>
                                {label}
                                <WeatherIcon icon={(todayWeather as DailyWetherMeta[])[0].icon}/>
                            </div>
                            <TemperatureDisplay todayWeather={todayWeather as DailyWetherMeta[]}/>
                        </React.Fragment>
                )
            }
        </div>
    );
};