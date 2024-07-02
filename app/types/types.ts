import { CalendarDate } from "@internationalized/date";

export type ITravelDates = CalendarDate | Date | any;
export type IDeparture = number | string | null;
export type IArrival = number | string | null;
export type IPassengers = number | string | null;

export interface PromosFormValues {
  travelDates: ITravelDates;
  departure: IDeparture;
  arrival: IArrival;
  passengers: IPassengers;
}
