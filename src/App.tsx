import React from 'react';
import './App.css';
import MyCalendar from "./MyCalendar";
import CustomTableCalendar from "./CustomTableCalendar";
import {DateContext, DateContextProvider} from "./model/DateContextProvider";

const App = () => {
    return (
        <div className={"App"}>
            <DateContextProvider>
                <MyCalendar/>
                {/* {<CustomTableCalendar/>}*/}
            </DateContextProvider>
        </div>
    );
};


const DateParser = (dateStr: string = "20200202T201126Z"): Date | Error => {
    if (dateStr.match("[0-9]*T[0-9]*Z") && dateStr.length === 16) {
        return new Date(
            Number(dateStr.substring(0, 3)),
            Number(dateStr.substring(4, 5)),
            Number(dateStr.substring(6, 7)),
            Number(dateStr.substring(9, 10)),
            Number(dateStr.substring(11, 12)),
            Number(dateStr.substring(13, 14)));
    }
    return new Error("could not parse Date");
};

export default App;
