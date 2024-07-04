import { CalendarDate } from "@internationalized/date";

export type ITravelDates = CalendarDate | Date;
export type IDeparture = number | string | null;
export type IArrival = number | string | null;
export type ITickets = number | string | null;

export interface PromosFormValues {
  travelDates: { start: ITravelDates; end: ITravelDates };
  departure: IDeparture;
  arrival: IArrival;
  tickets: ITickets;
}
