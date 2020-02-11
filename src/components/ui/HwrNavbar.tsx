import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import hwrLogo from "../../resources/hwr-logo-alt.svg";
import {useCarouselContext} from "./CarouselWrapper";
import {CarouselEnum} from "../../types/CarouselEnum";

export const HwrNavbar = () => {
    const {index, setIndex} = useCarouselContext();

    return (
        <Navbar bg="dark" variant="dark"
                sticky={"top"}
                as={"div"}
        >
            <Navbar.Brand onClick={
                () => {
                    if (index === CarouselEnum.CALENDAR)
                        setIndex(index - 1)
                }}>
                <img
                    alt="failed to load logo"
                    src={hwrLogo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top mr-4"
                />
                HWR Berlin - Stundenplan
            </Navbar.Brand>
            {index === CarouselEnum.CALENDAR &&
            <Nav.Link
                style={{color: "lightgray"}}
                onClick={() => setIndex(index - 1)}>Zurück</Nav.Link>}
        </Navbar>
    );
};
