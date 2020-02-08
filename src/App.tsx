import React from 'react';
import {MyCalendar} from "./components/calendar/MyCalendar";
import {DateContextProvider} from "./model/DateContextProvider";
import {CalendarMetadata} from "./components/calendar/CalendarMetadata";
import {HwrNavbar} from "./components/HwrNavbar";
import {Collapse} from "react-bootstrap";

const App = () => {
    return (
        <div style={{height: "100vh"}}>
            <HwrNavbar/>
            <Collapse in timeout={1500}>
                <div>

                    <div className={"calendar-container"}>
                        <DateContextProvider>
                            <CalendarMetadata/>
                            <MyCalendar/>
                        </DateContextProvider>
                    </div>
                </div>
            </Collapse>
        </div>
    );
};
export default App;
