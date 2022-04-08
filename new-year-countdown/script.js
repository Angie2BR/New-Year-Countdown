// const { setTimeout } = require("timers/promises");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");

const currentYear = new Date().getFullYear();
// console.log(currentYear);
const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);
// console.log(newYear);
year.innerText = currentYear + 1;

function showImage() {
  document.body.innerHTML = loading;
}

function updateCountdown() {
  let todayDate = new Date();
  console.log(todayDate);
  let todayTime = todayDate.getDate();
  console.log(todayTime);
  let remainingTime = newYear - todayDate;
  console.log(remainingTime);
  let oneMin = 60 * 1000;
  let oneHr = 60 * oneMin;
  let oneDay = 24 * oneHr;

  if (newYear < todayTime) {
    clearInterval(i);
  } else {
    let daysLeft = Math.floor(remainingTime / oneDay);
    days.innerText = daysLeft;
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    hours.innerText = hrsLeft;
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    minutes.innerText = minsLeft;
    let secLeft = Math.floor((remainingTime % oneMin) / 1000);
    seconds.innerText = secLeft;
  }
}
let i = setInterval(updateCountdown, 1000);

updateCountdown();
//
//   const diff=newYear-currentTime;
//   //converting ms to days
//   //also convert to h,m, s
//   //insert to the dom;
// }

// function timeLeft(endtime){
//   let t = Date.parse(endtime) - Date.parse(new Date());
//   let seconds = Math.floor( (t/1000) % 60 );
//   let minutes = Math.floor( (t/1000/60) % 60 );
//   let hours = Math.floor( (t/(1000*60*60)) % 24 );
//   let days = Math.floor( t/(1000*60*60*24) );

// };

// function setInterval(myTimer,1000){
//   const d = new Date();
//   seconds.innerHTML = d.toLocaleTimeString()
// }

// function setTimeout()
// //setInterval---because we want to update the time every second,
// //setTimeout--i want loading animation shows up only 1 sec
// //and then i want it to go away
