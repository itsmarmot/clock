var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
function twentyfourhour() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM";
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
    hour = updatetwentytime(hour);
    min = updatetwentytime(min);
    sec = updatetwentytime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday;
      var t = setTimeout(twentyfourhour, 1000); 
  }
  
  function updatetwentytime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  twentyfourhour();