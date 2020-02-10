import React, {FunctionComponent, ReactElement, useState} from 'react';
import {DailyWether, DailyWetherMeta} from "../../model/DarkSideWether";
import {useCalendarContext} from "../../model/DateContextProvider";
// @ts-ignore
import Skycons from "react-skycons"
import moment from "moment";

interface WetherIconProps {
    label: string,
}

const WetherIcon: FunctionComponent<WetherIconProps> = ({label}) => {

    const {wetherData} = useCalendarContext();

    const parseWetherInformation = (dailyWether: DailyWether): ReactElement[] => {
        return dailyWether.data.map((item: DailyWetherMeta, day: number) => {
            return (
                <React.Fragment key={day}>
                    <Skycons
                        className={"weather-icon"}
                        icon={item.icon.toUpperCase().replace(new RegExp("-", "g"), "_")}
                        color={"black"}
                        autoplay
                    />
                </React.Fragment>
            )
        });
    };
    return (
        <div className={"rbc-header" }>
            {label}
            {parseWetherInformation(wetherData.daily)[0]}
        </div>
    );
};

export default WetherIcon;