import React from 'react';
import {Col} from "react-bootstrap";
import calendar from "../resources/calendar.png"
import {useCarouselContext} from "./CarouselWrapper";
import {CarouselEnum} from "../model/CarouselEnum";

const Homepage = () => {
    const {setIndex, index} = useCarouselContext();

    return (
        <Col className={"home-container"}>
            <Col className={"homepage-presentment-container"}>
                <div id={"homepage-presentment-text"}>
                    <h1>HWR - Kalender</h1>
                    <h4> Dein moderner Stundenplan </h4>
                    <h5> Immer, Überall </h5>
                </div>
                <div id={"homepage-presentment-button"}
                     onClick={
                         () => {
                             if (index === CarouselEnum.HOMEPAGE)
                                 setTimeout(() => {
                                     setIndex(index + 1)
                                 }, 400)
                         }
                     }>
                    <img
                        src={calendar}
                        alt={"Fehler beim laden des logos"}
                        className={"calendar-icon"}
                    />
                </div>
            </Col>
        </Col>
    );
};
export default Homepage

