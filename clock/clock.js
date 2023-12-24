"use strict";
var $ = function (id) { return document.getElementById(id); };

var displayCurrentTime = function () {
    // Creating Variables for today, hours, minutes and seconds
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
    // Getting elements by Id and saving them by using padSignleDigit
        document.getElementById("hours").innerHTML = padSingleDigit(hours);
        document.getElementById("minutes").innerHTML = padSingleDigit(minutes);
        document.getElementById("seconds").innerHTML = padSingleDigit(seconds);
        document.getElementById("ampm").innerHTML = ampm;
    };

    var padSingleDigit = function (num) {
        if (num < 10) { return "0" + num; }
        else { return num; }
    };

    window.onload = function () {
        
        // Initial Clock Display
        displayCurrentTime(); 

        // Displaying current time after every 1 sec
        setInterval(displayCurrentTime, 1000); 
    };