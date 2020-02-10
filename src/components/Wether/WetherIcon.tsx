import React, {FunctionComponent, ReactElement} from 'react';
import {DailyWether, DailyWetherMeta} from "../../model/DarkSideWether";
import {useCalendarContext} from "../../model/DateContextProvider";
// @ts-ignore
import Skycons from "react-skycons"
import moment from "moment";

interface WetherIconProps {
    label: string,
    date: Date
}

const WetherIcon: FunctionComponent<WetherIconProps> = ({label, date}) => {

    const {wetherData} = useCalendarContext();

    const parseWetherInformation = (dailyWether: DailyWether): ReactElement[] => {
       return  dailyWether.data.filter((item) => moment(item.time).date() !== moment(date).date())
           .map((item: DailyWetherMeta, day: number) => {
            return (
                <React.Fragment key={day}>
                    <Skycons
                        className={"weather-icon"}
                        icon={item.icon.toUpperCase().replace(new RegExp("-", "g"), "_")}
                        color={"black"}
                        autoplay
                    />
                </React.Fragment>
            )})
    };
    return (
        <div className={"rbc-header" }>
            {label}
            {parseWetherInformation(wetherData.daily)}
        </div>
    );
};

export default WetherIcon;