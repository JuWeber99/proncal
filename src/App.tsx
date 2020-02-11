import React from 'react';
import {MyCalendar} from "./components/calendar/MyCalendar";
import {DateContextProvider} from "./model/DateContextProvider";
import {CalendarMetadata} from "./components/calendar/CalendarMetadata";
import {HwrNavbar} from "./components/HwrNavbar";
import Homepage from "./components/Homepage";
import CarouselWrapper, {CarouselContextProvider} from "./components/CarouselWrapper";
import {BrowserRouter, Route} from "react-router-dom";
import "./styles/media-queries.sass"

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
        <footer id={"footer"}/>
        </BrowserRouter>

    );
};
export default App;
