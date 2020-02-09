import React, {ReactElement} from 'react';
import {DailyWether, DailyWetherMeta} from "../model/DarkSideWether";
import {useCalendarContext} from "../model/DateContextProvider";
// @ts-ignore
import Skycons from "react-skycons"


interface WetherInformation {
    tHeight: number,
    tLow: number,
    icon: ReactElement
}

const WetherDisplay = () => {
    const {
        wetherData,
    } = useCalendarContext();


    const skycons = new Skycons({color: "white"});

    const parseWetherInformation = (dailyWether: DailyWether): ReactElement[] => {
        return dailyWether.data.map((item: DailyWetherMeta, day: number) => {
            const data: WetherInformation = {
                tHeight: item.temperatureHigh,
                tLow: item.temperatureLow,
                icon: <Skycons
                    icon={item.icon.toUpperCase()}
                    color={"white"}
                    autoplay
                />
            };
            return (
                <React.Fragment key={day}>
                    {data.icon} Hoch:{data.tHeight} Tief: {data.tLow}
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
export default WetherDisplay;