import React, {FunctionComponent, useEffect, useState} from 'react';
import {DailyWetherMeta, DarkSideWetherResponse} from "../../model/DarkSideWether";

import moment from "moment";
import axios from "axios"
import {Spinner} from 'react-bootstrap';
import TemperatureDisplay from "./TemperatureDisplay";
import {WeatherIcon} from "./WeatherIcon";


export interface WeatherHeaderProps {
    label: string,
    date: Date
}

export const WeatherInformation: FunctionComponent<WeatherHeaderProps> = ({label, date}) => {

    const [todayWeather, setTodayWeather] = useState<undefined | DailyWetherMeta[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get<DarkSideWetherResponse>(
                "https://proncal-weather-api.dns-cloud.net/" + moment(date).unix()
            );
            setTodayWeather(response.data.daily.data);
            console.log(response.data.daily)
        }

        fetchData().catch((error) => console.log(error)).finally(() => setIsLoading(false));
    }, [date]);


    return (
        <div>
            {isLoading && todayWeather === undefined ?
                <Spinner animation={"grow"} variant={"light"}/>
                :
                <React.Fragment>
                    <div
                        style={{
                            display: "inline-block",
                            flexDirection: "row",
                            margin: "5px"
                        }}
                    >{label}
                        <WeatherIcon icon={(todayWeather as DailyWetherMeta[])[0].icon}/>
                    </div>
                   <TemperatureDisplay todayWeather={todayWeather as DailyWetherMeta[]}/>
                </React.Fragment>
            }
        </div>
    );
};