


let location_inp = document.getElementById("distination_inp");
let date_inp = document.getElementById("date_inp");
let rooms_inp = document.getElementById("room_value");
let guests_inp = document.getElementById("guest_value");

let get_location = window.localStorage.getItem("location");
let get_date = window.localStorage.getItem("date");
let get_rooms = window.localStorage.getItem("room");
let get_guests = window.localStorage.getItem("guest");


location_inp.value = get_location;
date_inp.value = get_date;
rooms_inp.innerHTML = get_rooms;
guests_inp.innerHTML = get_guests;




