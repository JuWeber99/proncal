export enum Weekdays {
    MONDAY = "Montag",
    TUESDAY = "Dienstag",
    WEDNESDAY = "Mittwoch",
    THURSDAY = "Donnerstag",
    FRIDAY = "Freitag",
    SATURDAY = "Samstag",
    SUNDAY = "Sonntag",
}

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
                return Weekdays.MONDAY;
            case 1:
                return Weekdays.TUESDAY;
            case 2:
                return Weekdays.WEDNESDAY;
            case 3:
                return Weekdays.THURSDAY;
            case 4:
                return Weekdays.FRIDAY;
            case 5:
                return Weekdays.SATURDAY;
            case 6:
                return Weekdays.SUNDAY;
            default:
                return Weekdays.SUNDAY;
        }
    }

}