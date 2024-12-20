import { RESTDataSource } from "@apollo/datasource-rest";
import { FlightModel, Params } from "../models/models";
import { buildParms } from "../helpers/buildParams";

export class FlightsApi extends RESTDataSource {
  baseURL = "https://64c3f84c67cfdca3b660848e.mockapi.io/";

  getAllFlightsInfo() {
    return this.get<FlightModel[]>(`flight`);
  }

  getFlightsInfo(airlineName: string, status: string, flightNumber: string) {
    const params: Params = { airlineName, status, flightNumber };
    const finalParams: string = buildParms(params);

    return this.get<FlightModel[]>(`flight${finalParams}`);
  }
}
