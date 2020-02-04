import {min} from "moment";

export class IntraDayTime {

    private readonly _hour: number;
    private readonly _minute: number;

    get hour(): number {
        return this._hour;
    }

    get minute(): number {
        return this._minute;
    }

    constructor(hour: number, minute: number) {
        this._hour = hour;
        this._minute = minute;
    }


    toString(): string {
        let hStr = this.hour.toLocaleString();
        let minStr = this.minute.toLocaleString();
        if(Number(hStr) < 10) {
            hStr = "0"+hStr
        }
        if(Number(minStr) < 10) {
            minStr = "0"+minStr
        }
        return hStr + ":" + minStr
    }

}