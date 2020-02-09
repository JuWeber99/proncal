import React from 'react';
import {Col, Jumbotron, Row} from "react-bootstrap";
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
        }}><Col className={"homepage-presentment-text-container"}>
                <div>
                    <h1>Hwr - Kalendar</h1>
                    <h5> Ihr moderner Stundenplan </h5>
                    <h6> Immer, Überall </h6>
                </div>
            <img
                src={calendar}
                alt={"Fehler beim laden des logos"}
                height={"100rem"}
                width={"100rem"}
                className={"calendar-icon"}
                onClick={() => setIndex(index + 1)}
            />
        </Col>
        </Jumbotron>
    );
};
export default Homepage

