import moment from "moment";
import {Event} from "react-big-calendar";
import {MyEvent} from "../model/EventModel";

export class EventService {

    static mergeAssociatedEvents<T extends MyEvent>(data: T[]): T[] {
        data.forEach((item: T, i: number) => {
            if (i === data.length || i === 0) {
                return
            }

            /* for() {*/
            while (
                (
                    (data[i].summary === data[i - 1].summary)
                    && (moment(data[i].dtend).date() === moment(data[i - 1].dtend).date())
                )
                ) {
                data[i - 1].dtend = data[i].dtend;
                data.splice(i, 1);
            }
            /*}*/
        });
        return data;
    };

    static transformToApiEvent<T extends MyEvent>(events: T[]): Event[] {
        return events.map((event: T) => {
            return {
                allDay: false,
                title: event.summary.replace(/\\;/g, " | "),
                start: moment(event.dtstart).toDate(),
                end: moment(event.dtend).toDate()
            }
        });

    }
}