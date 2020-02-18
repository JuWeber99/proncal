import React, {FunctionComponent} from 'react';
import {Alert} from "react-bootstrap";

interface FetchingErrorProps {
    message?: string
}

export const FetchingError: FunctionComponent<FetchingErrorProps> = ({message}) => {

    return (
        <Alert variant={"danger"} id={"fetching-error"}>
            {
                message ?
                    {message}
                    :
                    <React.Fragment>Fehler</React.Fragment>
            }
        </Alert>
    );
};
