type Main = {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
}
type Sys = {
    country: string;
}
type Weather = {
    description: string;
    icon: string;
    id: string;
    main: string;
}
export type Data = {
    main: Main;
    name: string;
    sys:Sys;
    weather:Weather[]
}
