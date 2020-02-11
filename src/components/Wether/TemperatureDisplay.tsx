import React, {FunctionComponent, ReactElement} from 'react';
import {useCalendarContext} from "../../model/DateContextProvider";
import {DailyWether, DailyWetherMeta} from "../../model/DarkSideWether";
import he from "he";
import {WeatherHeaderProps} from "./WeatherIcon";

interface TemperatureInformation {

    todayWeather: DailyWetherMeta[]
}


const TemperatureDisplay: FunctionComponent<TemperatureInformation> = ( {todayWeather }) => {

    return (
        <div className={"temperature-display"}>
            <p>
                <span style={{color: "rgba(255,91,107,0.71)"}}>
                Hoch:{(todayWeather as DailyWetherMeta[])[0].temperatureHigh}C{he.decode("&deg")}
                </span>
                <br/>
                <span style={{color: "rgba(79,141,255,0.85)"}}>
                Tief: {(todayWeather as DailyWetherMeta[])[0].temperatureLow}C{he.decode("&deg")}
                </span>
            </p>
        </div>
    );
};

export default TemperatureDisplay;