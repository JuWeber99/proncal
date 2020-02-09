import React from 'react';
import {MyCalendar} from "./components/calendar/MyCalendar";
import {DateContextProvider} from "./model/DateContextProvider";
import {CalendarMetadata} from "./components/calendar/CalendarMetadata";
import {HwrNavbar} from "./components/HwrNavbar";
import Homepage from "./components/Homepage";
import CarouselWrapper, {CarouselContextProvider} from "./components/CarouselWrapper";

const carouselContent = [
    <Homepage/>,
    <DateContextProvider>
        <MyCalendar/>
        <CalendarMetadata/>
    </DateContextProvider>
];

const App = () => {
    return (
        <CarouselContextProvider>
            <React.Fragment>
                <HwrNavbar/>
                <CarouselWrapper content={carouselContent}/>
            </React.Fragment>
        </CarouselContextProvider>
    );
};
export default App;
