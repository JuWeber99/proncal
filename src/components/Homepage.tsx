import React from 'react';
import {Jumbotron} from "react-bootstrap";
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
                }}>
                    <div className={"homepage-presentment-text-container"}
                        style={{
                        display: "flex-inline",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        fontWeight: "bolder",
                        marginRight: "5rem",
                        border: "1px solid white",
                        borderRadius: "15px",
                        padding: "5rem",
                        color: "white"
                    }}>
                        <h1
                        >Hwr - Kalendar</h1>
                        <h5> Ihr moderner Stundenplan </h5>
                        <h6> Immer, Überall </h6>
                    </div>
                    <img
                        src={calendar}
                        alt={"Fehler beim laden des logos"}
                        height={"400rem"}
                        width={"400rem"}
                        className={"calendar-icon"}
                        onClick={() => setIndex(index+1)}
                    />
                </Jumbotron>
    );
};
export default Homepage

