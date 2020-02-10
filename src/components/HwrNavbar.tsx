import React from 'react';
import {Button, Nav, Navbar} from "react-bootstrap";
import hwrLogo from "../resources/hwr-logo-alt.svg";
import {useCarouselContext} from "./CarouselWrapper";
import {CarouselEnum} from "../model/CarouselEnum";

export const HwrNavbar = () => {
    const {index, setIndex} = useCarouselContext();

    return (
        <Navbar bg="dark" variant="dark"
                sticky={"top"}
                as={"div"}
                style={{
                    padding: "1rem",
                    boxShadow: "0 0.2rem 0.3rem 0 "
                }}>
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
           {/* {
                index === CarouselEnum.CALENDAR &&
                <Nav.Link>
                    <Button onClick={() => setIndex(index-1)}>  </Button>
                </Nav.Link>
            }*/}
        </Navbar>
    );
};
