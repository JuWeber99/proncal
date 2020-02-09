import React from 'react';
import {Col, Jumbotron} from "react-bootstrap";
import calendar from "../resources/calendar2.svg"
import {useCarouselContext} from "./CarouselWrapper";
import {CarouselEnum} from "../model/CarouselEnum";

const Homepage = () => {
    const {setIndex, index} = useCarouselContext();

    return (
        <Jumbotron className={"home-container"}>
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
                                 setIndex(index + 1)
                         }
                     }>
                    <img
                        src={calendar}
                        alt={"Fehler beim laden des logos"}
                        className={"calendar-icon"}
                    />
                </div>
            </Col>
        </Jumbotron>
    );
};
export default Homepage

