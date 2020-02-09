import React, {ReactElement, useEffect, useState} from 'react';
import {DailyWether, DailyWetherMeta, DarkSideWether} from "../model/DarkSideWether";
import {useCalendarContext} from "../model/DateContextProvider";

interface WetherInformation {
    tHeight: number,
    tLow: number,
    icon: ReactElement
}

const WetherDisplay = () => {
    const {
        isLoading,
        wetherData,
        setWetherData,
        setIsLoading
    } = useCalendarContext();

    const parseWetherInformation = (dailyWether: DailyWether): ReactElement[] => {
        return dailyWether.data.map((item: DailyWetherMeta, day: number) => {
            const data: WetherInformation = {
                tHeight: item.temperatureHigh,
                tLow: item.temperatureLow,
                icon: <>{item.icon}</>
            };
            return (
                <React.Fragment key={day}>
                    <span>{data.icon} Hoch:{data.tHeight} Tief: {data.tLow}</span>
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