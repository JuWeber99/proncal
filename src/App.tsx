import React from 'react';
import {MyCalendar} from "./components/calendar/MyCalendar";
import {CalendarContextProvider} from "./components/calendar/CalendarContextProvider";
import {CalendarMetadata} from "./components/calendar/CalendarMetadata";
import {HwrNavbar} from "./components/ui/HwrNavbar";
import {BrowserRouter, Route} from "react-router-dom";
import "./styles/media-queries.sass"


const App = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Route exact path={"/"}>
                <HwrNavbar/>
                <CalendarContextProvider>
                    <MyCalendar/>
                    <CalendarMetadata/>
                </CalendarContextProvider>
            </Route>
            <footer id={"footer"}/>
        </BrowserRouter>

    );
};
export default App;
