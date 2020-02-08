import React from 'react';
import {Navbar} from "react-bootstrap";
import hwrLogo from "../resources/hwr-logo-alt.svg";

export const HwrNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark"
                sticky={"top"}
                as={"div"}
                style={{padding: "2vmin"}}
        >
            <Navbar.Brand href="#home">
                <img
                    alt="failed to load logo"
                    src={hwrLogo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top mr-4"
                />
                HWR Berlin - Stundenplan
            </Navbar.Brand>
        </Navbar>
    );
};
