import moment, {Moment} from "moment";

interface DateServiceCapable {
    _dateContext: Moment

    getYear(): string

    getMonth(): string

    getMonths(): number

    currentDay(): string

    daysInMonth(): number

    currentDate(): number

    firstDayOfMonth(): number
}


export class DateService implements DateServiceCapable {
    _dateContext: Moment;

    get dateContext(): Moment {
        return this._dateContext
    }

    set dateContext(newContext: Moment)  {
        this._dateContext = newContext;
    }

    constructor(_dateContext: Moment) {
        this._dateContext = _dateContext;
    }

    getYear(): string {
        return this.dateContext.format("Y")
    }

    getMonths(): number {
    return this.dateContext.month();
    }

    getMonth(): string {
        return this.dateContext.format("MMMM")
    }

    daysInMonth(): number {
        return this.dateContext.daysInMonth()
    }

    currentDate(): number {
        return this.dateContext.date();
    }

    currentDay(): string {
        return this.dateContext.format("D");
    }

    firstDayOfMonth(): number {
        return moment(this.dateContext).startOf("month").weekday();
    }
}