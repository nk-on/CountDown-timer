const daysContainer = document.querySelector(".unit-days");
const hoursContainer = document.querySelector(".unit-hours");
const minutesContainer = document.querySelector(".unit-minutes");
const secondsContainer = document.querySelector(".unit-seconds");
//function should called in every second
//seconds variable should start from 60 and run till it reaches 0
//and seconds should be 60 again
//if it reaches 0 subtract minutes 1
//and minutes should be 60 again
//if minutes reaches 0 subtract hours 1
//start hours from 23 if it reached 0 subtract days 1
//set hours 23 again
let seconds = 60;
let minutes = 59;
let hours = 23;
let days = 15;
function splitToDigits(n) {
  const resArr = [];
  while (n > 0) {
    const firstDigit = n % 10;
    n = n - firstDigit;
    n = Math.floor(n / 10);
    resArr.push(firstDigit);
  }
  return resArr.reverse();
}
function displayUnit(unitContainer, unit) {
  const firstDigitContainer = unitContainer.children[0];
  const secondDigitContainer = unitContainer.children[1];
  const digits = splitToDigits(unit);
  firstDigitContainer.textContent = digits[0];
  secondDigitContainer.textContent = digits[1];
  return;
}
function handleTime() {
  seconds--;
  displayUnit(secondsContainer, seconds);
  if (seconds === 0) {
    seconds = 60;
    minutes--;
  }
    displayUnit(minutesContainer, minutes);
  if (minutes === 0) {
    minutes = 59;
    hours--;
  }
  displayUnit(hoursContainer, hours);
  if (hours < 0) {
    hours = 23;
    days--;
  }
  displayUnit(daysContainer, days);
}
function countDown() {
  handleTime();
}
setInterval(countDown, 1000);
