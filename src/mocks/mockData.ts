export const mocks = {
  Query: () => ({
    flights: () => [...new Array(6)],
  }),
  Flight: () => ({
    id: () => "User_01",
    flightNumber: () => "100",
    airlineName: () => "Avianca",
    departureTime: () => "16:30",
    arrivalTime: () => "17:30",
    status: () => "CANCELADO",
    terminal: () => "terminal 1",
  }),
};
