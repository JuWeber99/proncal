import React, {ReactElement} from 'react';
import {useCalendarContext} from "../../model/DateContextProvider";
import {DailyWether, DailyWetherMeta} from "../../model/DarkSideWether";
import he from "he";

interface TemperatureInformation {
    tHeight: string,
    tLow: string
}

const TemperatureDisplay = () => {

    const {wetherData} = useCalendarContext();

    const parseWetherInformation = (dailyWether: DailyWether): ReactElement[] => {
        return dailyWether.data.map((item: DailyWetherMeta, day: number) => {
            const data: TemperatureInformation = {
                tHeight: ((item.temperatureHigh - 32) / 1.8).toFixed(2),
                tLow: ((item.temperatureLow - 32) / 1.8).toFixed(2),
            };
            return (
                <React.Fragment key={day}>
                    <p>
                        <span style={{color: "rgba(255,91,107,0.71)"}}>
                            Hoch:{data.tHeight}C{he.decode("&deg")}
                        </span>
                        <br/>
                        <span style={{color: "rgba(79,141,255,0.85)"}}>
                            Tief: {data.tLow}C{he.decode("&deg")}
                        </span>
                    </p>
                </React.Fragment>
            )
        })
    };

    return (
        <div className={"temperature-display"}>
            {parseWetherInformation(wetherData.daily)[0]}
        </div>
    );
};

export default TemperatureDisplay;