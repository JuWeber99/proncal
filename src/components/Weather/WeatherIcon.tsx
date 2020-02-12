import {DarksideIcon} from "../../types/DarkSideWether";
import React, {FunctionComponent} from "react";
// @ts-ignore
import Skycons from "react-skycons"

interface WeatherIconProps {
    icon: DarksideIcon
}

export const WeatherIcon: FunctionComponent<WeatherIconProps> = ({icon}) =>  {
    return (
        <React.Fragment>
            <Skycons
                className={"weather-icon"}
                icon={icon.toUpperCase().replace(new RegExp("-", "g"), "_")}
                color={"grey"}
                autoplay
            />
        </React.Fragment>
    )
};