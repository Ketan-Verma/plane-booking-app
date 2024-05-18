class Reservation {
  constructor(id, flight, passengers, contactDetails, user) {
    this.id = id;
    this.flight = flight;
    this.passengers = passengers;
    this.contactDetails = contactDetails;
    this.user = user;
  }
}

export default Reservation;
