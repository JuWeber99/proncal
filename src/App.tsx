import React from 'react';
import MyCalendar from "./components/MyCalendar";
import {DateContextProvider} from "./model/DateContextProvider";
import CalendarMetadata from "./components/calendar/CalendarMetadata";

const App = () => {
    return (
        <div>
            <DateContextProvider>
                <CalendarMetadata/>
                <MyCalendar/>
            </DateContextProvider>
        </div>
    );
};
export default App;
