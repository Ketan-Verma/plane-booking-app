class Flight {
  constructor(id, airline, from, to, departureTime, arrivalTime, price) {
    this.id = id;
    this.airline = airline;
    this.from = from;
    this.to = to;
    this.departureTime = departureTime;
    this.arrivalTime = arrivalTime;
    this.price = price;
  }
}

export default Flight;
