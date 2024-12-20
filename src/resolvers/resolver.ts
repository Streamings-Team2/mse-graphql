import { Resolvers } from "../__generated__/types";

export const resolvers: Resolvers = {
  Query: {
    allFlights: (_, __, { dataSources }) => {
      return dataSources.flightsApi.getAllFlightsInfo();
    },
    flights: async (
      _,
      { airlineName, status, flightNumber },
      { dataSources }
    ) => {
      try {
        const flights = await dataSources.flightsApi.getFlightsInfo(
          airlineName,
          status,
          flightNumber
        );
        return {
          code: 200,
          success: true,
          message: "Flights filtered successfully",
          flights,
        };
      } catch (error) {
        return {
          code: error.extensions.response.status,
          success: false,
          message: error.extensions.response.body,
          flights: [],
        };
      }
    },
  },
};
