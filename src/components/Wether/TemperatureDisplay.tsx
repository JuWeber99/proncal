import React, {ReactElement} from 'react';
import {useCalendarContext} from "../../model/DateContextProvider";
import {DailyWether, DailyWetherMeta} from "../../model/DarkSideWether";

interface TemperatureInformation {
    tHeight: number,
    tLow: number
}

const TemperatureDisplay = () => {

    const {wetherData} = useCalendarContext();

    const parseWetherInformation = (dailyWether: DailyWether): ReactElement[] => {
        return dailyWether.data.map((item: DailyWetherMeta, day: number) => {
            const data: TemperatureInformation = {
                tHeight: (item.temperatureHigh - 32) / 1.8,
                tLow: (item.temperatureLow - 32) / 1.8,
            };
            return (
                <React.Fragment key={day}>
                    <p style={{
                        borderRadius: "10px",
                        fontSize: "0.8rem",
                        backgroundColor: "rgba(245, 245, 245, 0.56)"
                    }}>
                        <span style={{color: "red"}}>
                            Hoch:{data.tHeight.toString().substring(0, 5)}C
                        </span>
                        <br/>
                        <span style={{color: "blue"}}>
                            Tief: {data.tLow.toString().substring(0, 5)}C
                        </span>
                    </p>
                </React.Fragment>
            )
        })
    };

    return (
        <div className={"rbc-header"}>
            {parseWetherInformation(wetherData.daily)[0]}
        </div>
    );
};

export default TemperatureDisplay;