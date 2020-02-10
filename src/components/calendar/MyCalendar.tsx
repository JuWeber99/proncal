import React, {FunctionComponent, useEffect, useState} from 'react';
import {Calendar, Event, EventProps, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"
import {useCalendarContext} from "../../model/DateContextProvider";
import "../../styles/customCalendar.sass"
import "moment/locale/de"
import "../../styles/app.sass"
import {EventService} from "../../service/EventService";
import {EventCard} from "./EventCard";
import TemperatureDisplay from "../Wether/TemperatureDisplay";
import WetherIcon from "../Wether/WetherIcon";


export const MyCalendar: FunctionComponent = () => {
    const {eventData, dateContext} = useCalendarContext();
    const localizer = momentLocalizer(moment);
    const [transformedEvents, setTransformedEvent] = useState<Event[] | undefined>(undefined);

    useEffect(() => {
        setTransformedEvent(EventService.transformToApiEvent(eventData))
    }, [eventData]);

    return (
        <div>
            {
                transformedEvents &&
                <React.Fragment>
                    <Calendar
                        localizer={localizer}
                        events={transformedEvents}
                        defaultView={"week"}
                        views={["day", "week"]}
                        endAccessor={"end"}
                        startAccessor={"start"}
                        timeslots={12}
                        step={5}
                        min={new Date(1, 1, 1, 8)}
                        max={new Date(1, 1, 1, 22)}
                        components={{
                            event: ((event: EventProps) => EventCard(event)),
                            week: {
                                header: (props: any) => {
                                    if (moment(props.date).week() === dateContext.week()) {
                                        return (
                                            <div className={"rbc-header"}>
                                                <WetherIcon label={props.label}/>
                                                <TemperatureDisplay/>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className={"rbc-header"}>
                                                {props.label}
                                               {/* <p>{moment(props.date).diff(dateContext.date(), "days")}</p>*/}
                                                <p style={{color: "blue", fontWeight: "bolder"}}>Wettervoraussage in: {moment.duration(moment(props.date).diff(dateContext)).asDays().toFixed(0)+" "}
                                                Tagen
                                                </p>
                                            </div>
                                        )
                                    }
                                }
                            },
                        }
                        }
                    />
                </React.Fragment>
            }

        </div>
    );
};





