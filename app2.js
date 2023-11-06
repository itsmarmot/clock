var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function run_the_clock() {
  var date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

  let hrPosition = hr * 360 / 12 + ((min * 360 / 60) / 12);
  let minPosition = (min * 360 / 60) + (sec * 360 / 60) / 60;
  let secPosition = sec * 360 / 60;

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}


var interval = setInterval(run_the_clock, 1000);