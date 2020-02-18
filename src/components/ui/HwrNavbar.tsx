import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import hwrLogo from "../../resources/hwr-logo-alt.svg";
import darkSkyLogo from "../../resources/darkskylogo.png"

export const HwrNavbar = () => {

    return (
        <Navbar bg="dark" variant="dark"
                sticky={"top"}>
            <Nav>
                <Navbar.Brand>
                    <img
                        alt="failed to load logo"
                        src={hwrLogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top mr-4"
                    />
                    HWR Berlin - Stundenplan
                </Navbar.Brand>
            </Nav>
            <div className={"trademark"} style={{color: "white"}}>
                <em>Wetterabfrage - Powered by Dark Sky</em>
                <img
                    src={darkSkyLogo}
                    alt={"Fehler"}
                />
            </div>
        </Navbar>
    );
};
