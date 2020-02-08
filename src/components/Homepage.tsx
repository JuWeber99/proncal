import React from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron} from "react-bootstrap";

export const Homepage = () => {
    return (
        <div>
            <Jumbotron>
                <Link to={"/calendar"}> Go to Calendar</Link>
            </Jumbotron>
        </div>
    );
};
