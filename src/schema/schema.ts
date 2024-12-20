import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    allFlights: [Flight!]!
    flights(
      airlineName: String
      status: String
      flightNumber: String
    ): flightResponse!
  }

  type flightResponse {
    code: Int!
    success: Boolean!
    message: String!
    flights: [Flight]!
  }

  type Flight {
    id: ID!
    flightNumber: String!
    airlineName: String!
    departureTime: String!
    arrivalTime: String!
    status: String!
    terminal: String!
  }
`;
