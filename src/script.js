const daysContainer = document.querySelector('.unit-days');
const hoursContainer = document.querySelector('.unit-hours');
const minutesContainer = document.querySelector('.unit-minutes');
const secondsContainer = document.querySelector('.unit-seconds');
//function should called in every second 
//seconds variable should start from 60 and run till it reaches 0
  //and seconds should be 60 again
//if it reaches 0 subtract minutes 1 
    //and minutes should be 60 again
//if minutes reaches 0 subtract hours 1 
//start hours from 23 if it reached 0 subtract days 1
    //set hours 23 again
let seconds = minutes = 60;
let hours = 24;
let days = 10;