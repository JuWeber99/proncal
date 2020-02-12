import React, {FunctionComponent, useEffect, useState} from 'react';
import {DailyWetherMeta, DarkSideWetherResponse} from "../../types/DarkSideWether";
import moment from "moment";
import axios, {AxiosError} from "axios"
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

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get<DarkSideWetherResponse>(
                "https://proncal-weather-api.dns-cloud.net/" + moment(date).unix()
            );
            setTodayWeather(response.data.daily.data);
        }

        fetchData()
            .catch((error: AxiosError) => setIsError(error.isAxiosError))
            .finally(() => setIsLoading(false));
    }, [date]);


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