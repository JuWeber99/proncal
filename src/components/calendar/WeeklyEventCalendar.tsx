import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Table} from 'react-bootstrap';
import moment from "moment";
import {IntraDayTimeConverter} from "../../model/IntraDayTimeConverter";
import {dummyData} from "../../resources/hwr-wi-b-6";
import EventCard from "./EventCard";
import {DateMapper} from "../../model/DateMapper";
import {DateConverter} from "../../model/DateConverter";
import {MonthDayDateConverter} from "../../model/MonthDayDateConverter";
import {DateContext} from "../../model/DateContextProvider";
import {DateService} from "../../service/DateService";

const HwrCalendarClock = [
    new IntraDayTimeConverter(8, 0),
    new IntraDayTimeConverter(9, 0),
    new IntraDayTimeConverter(10, 0),
    new IntraDayTimeConverter(11, 0),
    new IntraDayTimeConverter(12, 0),
    new IntraDayTimeConverter(13, 0),
    new IntraDayTimeConverter(14, 0),
    new IntraDayTimeConverter(15, 0),
    new IntraDayTimeConverter(16, 0),
    new IntraDayTimeConverter(17, 0),
    new IntraDayTimeConverter(18, 0),
    new IntraDayTimeConverter(19, 0),
    new IntraDayTimeConverter(20, 0),
    new IntraDayTimeConverter(21, 0),
];

/*const weekbar = () => {
    return weekdays.map((day, key: number) => {
        console.log(today.getDate());
        return (
            <th>{today.getDate() + key} - {new DateMapper(moment().date(day).weekday() + 1).mapToDate().slice(0, 3)} </th>
        )
    })
};*/

const CustomTableCalendar = () => {

    const dateContext = useContext<DateContext>(DateContext);
    const dateService = new DateService(dateContext.state.dateContext);

    const weekdays = [];


    return (
        <Container>
            <Button>Nächste woche</Button>
            <Table striped bordered hover size={"sm"} responsive>
                <thead>
                <tr>
                    <th>Zeit</th>
                  {/*  {weekbar()}*/}
                </tr>
                </thead>
                <tbody>


                {HwrCalendarClock.map((item: IntraDayTimeConverter) => {
                    return (
                        <tr>
                            <td>{item.toString()}</td>
{/*                            {
                                Array(7).fill(
                                    <td><EventCard event={test}/></td>
                                )*/}
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </Container>
    );
};

export default CustomTableCalendar;