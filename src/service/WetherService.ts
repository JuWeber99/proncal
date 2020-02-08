import {AxiosRequestConfig} from "axios";

export class WetherService {

    static getBerlinWetherForeCast(): AxiosRequestConfig {
        return {
            method: "GET",
            url: "https://api.darksky.net/forecast/343201781aa363c6c7b72159954bcd8a/52.5,13.41667"
        }
    }
}