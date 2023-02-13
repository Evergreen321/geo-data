"use strict";
const speed = document.querySelector(".speed-value");
const altitude = document.querySelector(".altitude-value");
const arrow = document.querySelector(".arrow");

navigator.geolocation.watchPosition((data) => {
  console.log(data);

  if (data.altitude) {
    altitude.textContent = data.coords.altitude;
  } else {
    altitude.textContent = "0";
  }

  if (data.speed) {
    speed.textContent = data.coords.speed;
  } else {
    speed.textContent = "0";
  }

  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
});
