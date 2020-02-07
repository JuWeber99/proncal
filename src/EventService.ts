import {MyEvent} from "./model/EventModel";
import moment from "moment";

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
}