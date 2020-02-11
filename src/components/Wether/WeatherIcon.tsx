import React, {FunctionComponent, ReactElement, useEffect, useState} from 'react';
import {DailyWetherMeta, DarkSideWetherResponse} from "../../model/DarkSideWether";
// @ts-ignore
import Skycons from "react-skycons"
import moment from "moment";
import axios from "axios"
import {Spinner} from 'react-bootstrap';
import TemperatureDisplay from "./TemperatureDisplay";


export interface WeatherHeaderProps {
    label: string,
    date: Date
}

const WeatherIcon: FunctionComponent<WeatherHeaderProps> = ({label, date}) => {

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


    function displayWeatherHeading(dailyWether: DailyWetherMeta[]): ReactElement {
        return (
            <React.Fragment>
                <Skycons
                    className={"weather-icon"}
                    icon={dailyWether[0].icon.toUpperCase().replace(new RegExp("-", "g"), "_")}
                    color={"white"}
                    autoplay
                />
            </React.Fragment>
        )
    }

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
                        {displayWeatherHeading(todayWeather as DailyWetherMeta[])}
                    </div>
                   <TemperatureDisplay todayWeather={todayWeather as DailyWetherMeta[]}/>
                </React.Fragment>
            }
        </div>
    );
};

export default WeatherIcon;