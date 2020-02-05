import {Weekdays} from "./DateEnums";

export class DateMapper {
    private readonly _weekdayNumber: number;

    get weekdayNumber(): number {
        return this._weekdayNumber;
    }

    constructor(_weekdayNumber: number) {
        this._weekdayNumber = _weekdayNumber;
    }

    mapToDate(): Weekdays {
        switch (this._weekdayNumber) {
            case 0:
                return Weekdays.SUNDAY;
            case 1:
                return Weekdays.MONDAY;
            case 2:
                return Weekdays.TUESDAY;
            case 3:
                return Weekdays.WEDNESDAY;
            case 4:
                return Weekdays.THURSDAY;
            case 5:
                return Weekdays.FRIDAY;
            case 6:
                return Weekdays.SATURDAY;
            default:
                return Weekdays.SUNDAY;
        }
    }

}