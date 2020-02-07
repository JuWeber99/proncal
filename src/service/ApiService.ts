import {MyEvent} from "../model/EventModel";
import axios from "axios";
import {json2csv} from "json-2-csv";

export class ApiService {

    static exportToLocalCsvRequest = (data: MyEvent[]) => {
        axios.request({
            method: "POST",
            url: "https://hwr-wi-204.sagebiels.org/api/v1/events/getCsv",
            data: json2csv(data, (error, csv) => {
                console.log(error);
                console.log(csv);
            }, {expandArrayObjects: true})
        }).then(response => response).catch((error) => error)
    };


/*    static async fetchEventData(uri: string = "http://www.test.de/api/endpunkt"): Promise<MyEvent[]> {
        return await fetch(uri).then((response => response.json().then((data: MyEvent[]) => {
            return data
        })));
    }*/

    /*function fetchData(uri: string = "https://hwr-wi-204.sagebiels.org/api/v1/events"): Promise<any> {
        /!*    const response: Promise<MyEvent[]> = axios.get("http://hwr-wi-204.sagebiels.org/api/v1/events")
                    .then((response: AxiosResponse<MyEvent[]>) => response.data)
                    .then((data: MyEvent[]) => {
                        return data
                    });
                console.log(response.then((data) => {
                    return data
                }));*!/
    }*/
}