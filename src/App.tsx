import React from 'react';
import MyCalendar from "./components/MyCalendar";
import {DateContextProvider} from "./model/DateContextProvider";
import { Row, Container } from 'react-bootstrap';

const App = () => {
    return (
        <div style={{height: "100vh"}}>
            <DateContextProvider>
                <MyCalendar/>
            </DateContextProvider>
            <Container fluid
            style={{
                display: "flex",
                alignContent: "center"
            }}>
            <Row>I<p>cons made by <a href="https://www.flaticon.com/authors/smashicons"
                                     title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"
                                                                               title="Flaticon">www.flaticon.com</a></p>
            </Row>
            <Row><p>Icons made by <a href="https://www.flaticon.com/authors/freepik"
                                     title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"
                                                                         title="Flaticon">www.flaticon.com</a></p>
            </Row>
        </Container>

        </div>
    );
};
export default App;
