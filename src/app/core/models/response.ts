import { Journey } from "./journey";

export interface Flights {
    departureStation: string;
    arrivalStation: string;
    flightCarrier: string;
    flightNumber: string;
    price: number;
}