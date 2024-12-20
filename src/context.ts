import { FlightsApi } from "./api/flightsApi";

export type DataSourceContext = {
  dataSources: {
    flightsApi: FlightsApi;
  };
};
