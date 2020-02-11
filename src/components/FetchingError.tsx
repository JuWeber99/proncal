import React, {FunctionComponent} from 'react';


export const FetchingError: FunctionComponent = () => {
    return (
        <div id={"error"}>
            <p><em>Fehler beim Laden der Daten!</em></p>
        </div>
    );
};
