import React, {FunctionComponent} from 'react';
import {DailyWetherMeta} from "../../model/DarkSideWether";
import he from "he";

interface TemperatureInformation {
    todayWeather: DailyWetherMeta[]
}

export const TemperatureDisplay: FunctionComponent<TemperatureInformation> = ({todayWeather}) => {

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
