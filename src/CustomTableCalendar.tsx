import React, {useEffect, useState} from 'react';
import {Container, Table} from 'react-bootstrap';
import moment from "moment";
import {DateMapper} from "./model/DateEnums";
import {IntraDayTime} from "./model/IntraDayTime";

const HwrCalendarClock = [
    new IntraDayTime(8, 0),
    new IntraDayTime(9, 0),
    new IntraDayTime(10, 0),
    new IntraDayTime(11, 0),
    new IntraDayTime(12, 0),
    new IntraDayTime(13, 0),
    new IntraDayTime(14, 0),
    new IntraDayTime(15, 0),
    new IntraDayTime(16, 0),
    new IntraDayTime(17, 0),
    new IntraDayTime(18, 0),
    new IntraDayTime(19, 0),
    new IntraDayTime(20, 0),
    new IntraDayTime(21, 0),
];

const CustomTableCalendar = () => {

    const [today, setToday] = useState(
        new Date(moment().year(), moment().month(), moment().date(), moment().hours())
    );
    const [weekdays, setWeekdays] = useState([today.getDay()]);

    useEffect(() => {
        setWeekdays([
            (moment().date(today.getDate()).day()),
            (moment().date(today.getDate() + 1).day()),
            (moment().date(today.getDate() + 2).day()),
            (moment().date(today.getDate() + 3).day()),
            (moment().date(today.getDate() + 4).day()),
            (moment().date(today.getDate() + 5).day()),
            (moment().date(today.getDate() + 6).day())
        ]);
    }, [today]);


    /*
    *  "focus" the current date (style it)
    *  from there show the other relatively
    * */

    return (
        <Container>
            <Table striped bordered hover size={"sm"} responsive>
                <thead>
                <tr>
                    <th>Zeit</th>
                    {
                        weekdays.map((day, key: number) => {
                            console.log(today.getDate());
                            return (
                                <th>{today.getDate() + key}  - {new DateMapper(moment().date(day).weekday()+1).mapToDate().slice(0, 3)} </th>
                            )
                        })
                    }
                </tr>
                </thead>
                <tbody>


                {HwrCalendarClock.map((item: IntraDayTime) => {
                    return (
                        <tr>
                            <td>{item.toString()}</td>
                            {
                                Array(7).fill(
                                    <td>test</td>
                                )
                            }

                        </tr>
                    )
                })}


                </tbody>
            </Table>
        </Container>
    );
};

export default CustomTableCalendar;