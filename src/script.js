//  Europe/Paris Europe/London America/New_York Asia/Singapore
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function setClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDegrees = seconds * 6;
  const minuteDegrees = minutes * 6;
  const hourDegrees = hours * 30 + minutes * 0.5;

  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setClock();
setInterval(setClock, 1000);

function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm[<small>]:ss[</small>] [<small>]A[</small>]",
  );
  let kyivElement = document.querySelector("#kyiv");
  let kyivDateElement = kyivElement.querySelector(".date");
  let kyivTimeElement = kyivElement.querySelector(".time");
  let kyivTime = moment().tz("Europe/Kiev");
  kyivDateElement.innerHTML = moment().format("MMMM Do YYYY");
  kyivTimeElement.innerHTML = kyivTime.format(
    "h:mm[<small>]:ss[</small>] [<small>]A[</small>]",
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citisElement = document.querySelector("#cities");
  citisElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm [<small>]:ss A[</small>]")}</div>
        </div>`;
}
updateTime();
setInterval(updateTime, 1000);
setInterval(updateCity, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
