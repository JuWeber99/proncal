import React from 'react';
import {MyCalendar} from "./components/calendar/MyCalendar";
import {CalendarContextProvider} from "./components/calendar/CalendarContextProvider";
import {CalendarMetadata} from "./components/calendar/CalendarMetadata";
import {HwrNavbar} from "./components/ui/HwrNavbar";
import Homepage from "./components/ui/Homepage";
import CarouselWrapper, {CarouselContextProvider} from "./components/ui/CarouselWrapper";
import {BrowserRouter, Route} from "react-router-dom";
import "./styles/media-queries.sass"

const carouselContent = [
    <Homepage/>,
    <CalendarContextProvider>
        <MyCalendar/>
        <CalendarMetadata/>
    </CalendarContextProvider>
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
