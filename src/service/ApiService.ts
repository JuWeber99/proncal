import {MyEvent} from "../types/Event";
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
}