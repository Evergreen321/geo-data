"use strict";

// COMPASS
// const speed = document.querySelector(".speed-value");
// const altitude = document.querySelector(".altitude-value");
// const arrow = document.querySelector(".arrow");

// const latitudeComponent = document.querySelector(".latitude");
// const longitudeComponent = document.querySelector(".longitude");

navigator.geolocation.watchPosition((data) => {
  console.log(data);

  const latitude = data.coords.latitude;
  const longitude = data.coords.longitude;

  localStorage.setItem("latitude", `${latitude}`);
  localStorage.setItem("longitude", `${longitude}`);
});

const latitude = Number(localStorage.getItem("latitude"));
const longitude = Number(localStorage.getItem("longitude"));

//   if (data.altitude) {
//     altitude.textContent = data.coords.altitude;
//   } else {
//     altitude.textContent = "0";
//   }

//   if (data.speed) {
//     speed.textContent = data.coords.speed;
//   } else {
//     speed.textContent = "0";
//   }

//   arrow.style.transform = `rotate(${data.coords.heading}deg)`;

//   latitudeComponent.textContent = latitude;
//   longitudeComponent.textContent = longitude;
// });

// MAP
function initMap() {
  let myPosition = { lat: latitude, lng: longitude };
  let map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 10,
    center: myPosition,
  });

  let marker = new google.maps.Marker({ position: myPosition, map: map });
}
