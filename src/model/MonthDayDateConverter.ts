import {Weekdays} from "./DateEnums";
import {Moment} from "moment";
import {DateMapper} from "./DateMapper";
import {DateConverter} from "./DateConverter";

export class MonthDayDateConverter extends DateConverter {
    weekday: Weekdays;
    dayOfMonth: Moment;

    constructor(weekday: number, dayOfMonth: Moment) {
        super();
        this.weekday = new DateMapper(weekday).mapToDate();
        this.dayOfMonth = dayOfMonth
    }

    toString(): string {
        const dayStr = this.weekday;
        const monthDateStr = this.dayOfMonth.format("DD.MM");
        return dayStr + " - " + monthDateStr
    }
}

