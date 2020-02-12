import React, {FunctionComponent} from 'react';
import {Alert} from "react-bootstrap";


export const FetchingError: FunctionComponent = () => {

    return (
        <Alert variant={"danger"} id={"fetching-error"}>
            Fehler beim Laden!
        </Alert>
    );
};
