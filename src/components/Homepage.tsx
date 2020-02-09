import React from 'react';
import {Col, Jumbotron} from "react-bootstrap";
import calendar from "../resources/calendar.png"
import {useCarouselContext} from "./CarouselWrapper";

const Homepage = () => {

    const {setIndex, index} = useCarouselContext();

    return (
        <Jumbotron style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#D50C2F"
        }}><Col className={"homepage-presentment-container"}>
            <div id={"homepage-presentment-text"}>
                <h1>Hwr - Kalendar</h1>
                <h4> Ihr moderner Stundenplan </h4>
                <h5> Immer, Überall </h5>
            </div>
            <div id={"homepage-presentment-button"}>
                <h4>Zum Kalendar</h4>
                <img
                    src={calendar}
                    alt={"Fehler beim laden des logos"}
                    className={"calendar-icon"}
                    onClick={() => setIndex(index + 1)}
                />
            </div>
        </Col>
        </Jumbotron>
    );
};
export default Homepage

