import React from 'react';
import {MyCalendar} from "./components/calendar/MyCalendar";
import {DateContextProvider} from "./model/DateContextProvider";
import {CalendarMetadata} from "./components/calendar/CalendarMetadata";
import {HwrNavbar} from "./components/HwrNavbar";
import Homepage from "./components/Homepage";
import CarouselWrapper, {CarouselContextProvider} from "./components/CarouselWrapper";
import {BrowserRouter, Route} from "react-router-dom";
import WetherDisplay from "./components/WetherDisplay";

const carouselContent = [
    <Homepage/>,
    <DateContextProvider>
        <MyCalendar/>
        <CalendarMetadata/>
    </DateContextProvider>
];

const App = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Route exact path={"/"}>
                <CarouselContextProvider>
                    <React.Fragment>
                        <HwrNavbar/>
                        <CarouselWrapper content={carouselContent}/>
                    </React.Fragment>
                </CarouselContextProvider>
            </Route>
        </BrowserRouter>
    );
};
export default App;
