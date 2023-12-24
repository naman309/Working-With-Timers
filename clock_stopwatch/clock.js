"use strict";
var $ = function (id) { return document.getElementById(id); };

var stopwatchTimer;
var elapsedMinutes = 0;
var elapsedSeconds = 0;
var elapsedMilliseconds = 0;

var displayCurrentTime = function () {
  // Creating variables for today, hours, minutes, ampm and seconds
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  var ampm = "AM"; 

  // Using if else loop for AM and PM
  if (hours > 12) { 
    hours = hours - 12;
    ampm = "PM";
  } else { 
    switch (hours) {
      case 12:
        ampm = "PM";
        break;
      case 0: 
        hours = 12;
        ampm = "AM";
    }

  }

  // Used nodeValue and storing them in padSingleDigit
  $("hours").firstChild.nodeValue = padSingleDigit(hours);
  $("minutes").firstChild.nodeValue = padSingleDigit(minutes);
  $("seconds").firstChild.nodeValue = padSingleDigit(seconds);
  $("ampm").firstChild.nodeValue = ampm;
};

var padSingleDigit = function (num) {
  if (num < 10) { return "0" + num; }
  else { return num; }
};

// Using if else for "Stop" button
var tickStopwatch = function () {
  elapsedMilliseconds = elapsedMilliseconds + 10;

  if (elapsedMilliseconds == 1000) {
    elapsedMilliseconds = 0;
    elapsedSeconds = elapsedSeconds + 1;
  }
  if (elapsedSeconds == 60) {
    elapsedSeconds = 0;
    elapsedMinutes = elapsedMinutes + 1;
  }
  $("s_ms").firstChild.nodeValue = elapsedMilliseconds;
  $("s_seconds").firstChild.nodeValue = elapsedSeconds;
  $("s_minutes").firstChild.nodeValue = elapsedMinutes;
};

// Creating a function for "Start" and using if else for "Start button"
var startStopwatch = function (evt) {
  var eventHandler = function () {
    if (!evt) { evt = window.event }
    if (evt.preventDefault) {
      evt.preventDefault();
    }
    else {
      evt.returnValue = false;
    }
  };
  tickStopwatch;
  stopwatchTimer = setInterval(tickStopwatch, 10);
};

// Creating a function for "Stop" and using if else for "Stop bbutton"
var stopStopwatch = function (evt) {
  var eventHandler = function () {
    if (!evt) { evt = window.event }
    if (evt.preventDefault) {
      evt.preventDefault();
    }
    else {
      evt.returnValue = false;
    }
  };
  clearInterval(stopwatchTimer);
};

// Creating a function for "Reset" and using if else for "Reset button"
var resetStopwatch = function (evt) {
    if (!evt) { evt = window.event; }
    if (evt.preventDefault) { evt.preventDefault(); }
    else { evt.returnFalse = false; }

    clearInterval(stopwatchTimer);
    $("s_ms").innerHTML = "000";
    $("s_seconds").innerHTML = "00";
    $("s_minutes").innerHTML = "00";
    elapsedMilliseconds = 0;
    elapsedMinutes = 0;
    elapsedSeconds = 0;

};

window.onload = function () {
  
  // Initial Clock Display
  displayCurrentTime();

  // Displaying current time at every interval of 1 sec.
  setInterval(displayCurrentTime, 1000);

  // Functionality for Clicking on start, stop and reset stopwatch
  $("start").onclick = startStopwatch;
  $("stop").onclick = stopStopwatch;
  $("reset").onclick = resetStopwatch;
};