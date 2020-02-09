type DarksideIcon =
    "clear-day"
    | "clear-night"
    | "rain"
    | "snow"
    | "sleet"
    | "wind"
    | "fog"
    | "cloudy"
    | "partly-cloudy-day"
    | "partly-cloudy-night"

export interface DarkSideWether {
    latitude: number,
    longitude: number,
    timezone: string,
    currently: {
        time: number,
        summary: string,
        icon: DarksideIcon,
        precipIntensity: number,
        precipProbability: number,
        precipType: DarksideIcon
        temperature: number,
        apparentTemperature: number,
        dewPoint: number,
        humidity: number,
        pressure: number,
        windSpeed: number,
        windGust: number,
        windBearing: number,
        cloudCover: number,
        uvIndex: number,
        visibility: number,
        ozone: number
    },
    hourly: {
        summary: string,
        icon: DarksideIcon,
        data: HourlyWetherMeta[]
    },
    daily: DailyWether,
    flags: {
        sources: string [],
        "meteoalarm-license": string
        "nearest-station": number,
        units: string
    },
    offset: number
}

export interface DailyWether {
    summary: string,
    icon: DarksideIcon,
    data: DailyWetherMeta[]
}

export interface DailyWetherMeta {
    time: number,
    summary: string,
    icon: DarksideIcon,
    sunriseTime: number,
    sunsetTime: number,
    moonPhase: number,
    precipIntensity: number,
    precipIntensityMax: number,
    precipIntensityMaxTime: number,
    precipProbability: number,
    precipType: DarksideIcon,
    temperatureHigh: number,
    temperatureHighTime: number,
    temperatureLow: number,
    temperatureLowTime: number,
    apparentTemperatureHigh: number,
    apparentTemperatureHighTime: number,
    apparentTemperatureLow: number,
    apparentTemperatureLowTime: number,
    dewPoint: number,
    humidity: number,
    pressure: number,
    windSpeed: number,
    windGust: number,
    windGustTime: number,
    windBearing: number,
    cloudCover: number,
    uvIndex: number,
    uvIndexTime: number,
    visibility: number,
    ozone: number,
    temperatureMin: number,
    temperatureMinTime: number,
    temperatureMax: number,
    temperatureMaxTime: number,
    apparentTemperatureMin: number,
    apparentTemperatureMinTime: number,
    apparentTemperatureMax: number,
    apparentTemperatureMaxTime: number
}

export interface HourlyWetherMeta {
    time: number,
    summary: string,
    icon: DarksideIcon,
    precipIntensity?: number,
    precipProbability?: number,
    precipType?: string,
    temperature: number,
    apparentTemperature: number,
    dewPoint: number,
    humidity: number,
    pressure: number,
    windSpeed: number,
    windGust: number,
    windBearing: number,
    cloudCover: number,
    uvIndex: number,
    visibility: number,
    ozone: number
}