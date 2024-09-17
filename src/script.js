//Dfining variables
const daysContainer = document.querySelector(".unit-days");
const hoursContainer = document.querySelector(".unit-hours");
const minutesContainer = document.querySelector(".unit-minutes");
const secondsContainer = document.querySelector(".unit-seconds");
const pauseIcon = document.querySelector('#pause');
const resumeIcon = document.querySelector('#resume');
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
  if(unit >= 100){
    unitContainer.textContent = unit;
    return;
  };
  const firstDigitContainer = unitContainer.children[0];
  const secondDigitContainer = unitContainer.children[1];
  const digits = splitToDigits(unit);
  firstDigitContainer.textContent = digits[0];
  secondDigitContainer.textContent = digits[1];
}
//decreasing time units but reseting them if they reach 0
function countDown() {
  const targetDate = new Date('12/31/2024');
  const currentDate = new Date();
  const differenceInTime = Math.abs(targetDate - currentDate) / 1000;
  const daysDifference =  Math.floor(differenceInTime / 86400);
  const hoursDifferece =  Math.floor(differenceInTime / 3600) % 24;
  const minutesDifference = Math.floor(differenceInTime / 60) % 60;
  const secondsDifference = Math.floor(differenceInTime%60);
  displayUnit(daysContainer,daysDifference);
  displayUnit(hoursContainer,hoursDifferece);
  displayUnit(minutesContainer,minutesDifference);
  displayUnit(secondsContainer,secondsDifference);
};
setInterval(countDown,1000)