export type FlightModel = {
  id: string;
  flightNumber: string;
  airlineName: string;
  departureTime: string;
  arrivalTime: string;
  status: string;
  terminal: string;
};

export interface Params {
  airlineName?: string | null;
  status?: string | null;
  flightNumber?: string | null;
}
