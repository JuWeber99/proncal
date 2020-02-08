import React from 'react';
import {MyCalendar} from "./components/calendar/MyCalendar";
import {DateContextProvider} from "./model/DateContextProvider";
import {CalendarMetadata} from "./components/calendar/CalendarMetadata";
import {HwrNavbar} from "./components/HwrNavbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Homepage} from "./components/Homepage";

const App = () => {
    return (
        <div style={{height: "100vh"}}>
            <HwrNavbar/>
            <Router>
                <Switch>
                    <Route exact path={"/"}> <Homepage/> </Route>
                    <Route exact path={"/calendar"}>
                        <div className={"calendar-container"}>
                            <DateContextProvider>
                                <CalendarMetadata/>
                                <MyCalendar/>
                            </DateContextProvider>
                        </div>
                    </Route>
                </Switch>
            </Router>

        </div>
    );
};
export default App;
