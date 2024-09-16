//Dfining variables
const daysContainer = document.querySelector(".unit-days");
const hoursContainer = document.querySelector(".unit-hours");
const minutesContainer = document.querySelector(".unit-minutes");
const secondsContainer = document.querySelector(".unit-seconds");
let seconds = 60;
let minutes = 59;
let hours = 23;
let days = 15;
//Spliting time unit into individual digits
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
//Displaying splited time unit digits into separete HTML spans
function displayUnit(unitContainer, unit) {
  const firstDigitContainer = unitContainer.children[0];
  const secondDigitContainer = unitContainer.children[1];
  const digits = splitToDigits(unit);
  firstDigitContainer.textContent = digits[0];
  secondDigitContainer.textContent = digits[1];
  return;
}
//decreasing time units but reseting them if they reach 0
function countDown() {
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
setInterval(countDown, 1000);
