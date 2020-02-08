import React from 'react';
import {MyCalendar} from "./components/calendar/MyCalendar";
import {DateContextProvider} from "./model/DateContextProvider";
import {CalendarMetadata} from "./components/calendar/CalendarMetadata";
import {HwrNavbar} from "./components/HwrNavbar";

const App = () => {
    return (
        <div style={{height: "100vh"}}>
            <HwrNavbar/>
            <div className={"calendar-container"}>
                <DateContextProvider>
                    <CalendarMetadata/>
                    <MyCalendar/>
                </DateContextProvider>
            </div>
        </div>
    );
};
export default App;
