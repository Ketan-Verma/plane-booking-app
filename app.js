// gloabal variables
let globalFromLocation = "";
let globalToLocation = "";
let globalAirline = "";
let globalPrice = 5000;
let passengerList = [];

//event listeners
let addPassengerBtn = document.getElementById("validationCustom05");
addPassengerBtn.addEventListener("click", addPassenger);
let bookFlightBtn = document.getElementById("book-btn");
bookFlightBtn.addEventListener("click", bookFlight);
let clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearForm);
let passengerTable = document.getElementById("passenger-table");

document
  .getElementById("exploreButton")
  .addEventListener("click", displayFlights);

//shows list of flights
function displayFlights() {
  const from = document.getElementById("fromLocation").value;
  const to = document.getElementById("toLocation").value;
  globalFromLocation = from;
  globalToLocation = to;
  const resultsDiv = document.getElementById("flight-list");

  // Filter flights based on selected "from" and "to" values
  const filteredFlights = flightData.filter(
    (flight) => flight.from === from && flight.to === to
  );

  // Clear previous results
  resultsDiv.innerHTML = "";

  // Display filtered flights
  if (filteredFlights.length > 0) {
    filteredFlights.forEach((flight) => {
      const flightInfo = `
                
                <div class="shadow p-3 mb-5 bg-body rounded container-md text-center flight-lo">
  <div class="row ">
    <div class="col align-items-start">
      <p><small> Airline</small></p>
      <h5 class='text-info'>${flight.airline}</h5>
      
    </div>
    <div class="col ">
    <p><small> From</small></p>
    <h5>${flight.from}</h5>
    </div>
    <div class="col ">
    <p><small> To</small></p>
    <h5>${flight.to}</h5>
    </div>
    <div class="col ">
    <p><small> Time</small></p>
    <h5>${flight.departureTime}-${flight.arrivalTime}</h5>
    </div>
    <div class="col ">
    <p><small> Price</small></p>
    <h5 class='text-success'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 20 20">
    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
  </svg>${flight.price}</h5>
    </div>
  </div>
  <div class="row ">
    <div class="col align-self-end">
        <button onclick="updateGlobalAirline('${flight.id}')"  class="book-btn btn btn-primary" >Book Tickets</button>
    </div>
  </div>
</div>
            `;
      resultsDiv.innerHTML += flightInfo;
    });
  } else {
    resultsDiv.innerHTML = "<p>No flights found.</p>";
  }
}
//book tickets clicked
function updateGlobalAirline(id) {
  let airline = flightData.find((flight) => flight.id == id).airline;
  let price = flightData.find((flight) => flight.id == id).price;
  globalAirline = airline;
  globalPrice = price;
  console.log("Selected Airline:", globalAirline);
  document.getElementById("book-overlay").style.display = "flex";
  document.getElementById("flight-list").innerHTML = "";
  // window.location.href = "book.html";
}

function addPassenger() {
  let passengerName = document.getElementById("validationCustom01").value;
  let passengerAge = document.getElementById("validationCustom02").value;
  if (passengerName === "" || passengerAge === "") {
    alert("Please enter passenger details");
    return;
  }
  // let passengerGender = document.getElementById("validationCustom03").value;
  // let passengerSeat = document.getElementById("validationCustom04").value;
  let passenger = {
    name: passengerName,
    age: passengerAge,
  };
  passengerList.push(passenger);
  tbodyContent = "";
  passengerList.forEach((passenger, index) => {
    tbodyContent += `<tr>
    <th scope="row">${index + 1}</th>
    <td>${passenger.name}</td>
    <td>${passenger.age}</td>
  </tr>`;
  });
  passengerTable.innerHTML = `<table class="table">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Full Name</th>
    <th scope="col">Age</th>
  </tr>
</thead>
<tbody id="passenger-list">
  ${tbodyContent}
</tbody>
</table>`;
  // console.log(passenger);
}
function bookFlight() {
  if (passengerList.length === 0) {
    alert("Please add passenger details");
    return;
  }
  showTicket();
  // alert("Flight booked successfully!");
}
function clearForm() {
  document.getElementById("validationCustom01").value = "";
  document.getElementById("validationCustom02").value = "";
  passengerList = [];
  passengerTable.innerHTML = "";
}
// showTicket();
function showTicket() {
  document.getElementById("ticket-container").style.display = "block";
  let ticketDiv = document.getElementById("ticket-container");
  ticketDiv.innerHTML = "<h1>Ticket</h1>";
  passengerList.forEach((element) => {
    ticketDiv.innerHTML += `<div class="container-sm ticket ">
    <div class="row">
      <div class="col">
        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#5985E1"><path d="m348-325 368-101q17-5 25-16t3-28q-5-17-18-23.5t-28.8-2.37L594-469 428-631l-52 12 103 181-111 31-52-43-29 10 61 115Zm472 165H140q-24.75 0-42.37-17.63Q80-195.25 80-220v-153q37-8 61.5-37.5T166-480q0-40-24.5-70T80-587v-153q0-24.75 17.63-42.38Q115.25-800 140-800h680q24.75 0 42.38 17.62Q880-764.75 880-740v520q0 24.75-17.62 42.37Q844.75-160 820-160Zm0-60v-520H140v109q39 26 62.5 65t23.5 86q0 47-23.5 86T140-329v109h680ZM480-480Z"/></svg>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <p>
          <small>Name:</small> <strong>${element.name}</strong>
        </p>
      </div>
      <div class="col"><small>From:</small> <strong>${globalFromLocation}</strong></div>
      <div class="col"><small>To:</small> <strong>${globalToLocation}</strong></div>
    </div>
    <div class="row">
      <div class="col-6">
        <small>Age:</small> <strong>${element.age}</strong>
      </div>
      <div class="col"><small>Flight:</small> <strong>${globalAirline}</strong></div>
      <div class="col"><small>Price:</small> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 20 20">
      <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
    </svg><strong>${globalPrice}</strong></div>
  </div>`;
    // console.log(element);
  });
}
