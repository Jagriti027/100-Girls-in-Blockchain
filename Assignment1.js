function displayClock() {
  var date = new Date();

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  // Add leading zeros if the values are less than 10
  hours = addLeadingZero(hours);
  minutes = addLeadingZero(minutes);
  seconds = addLeadingZero(seconds);

  var time = hours + ":" + minutes + ":" + seconds;

  // Display the clock time
  console.log(time);

  // Update the clock every second
  setTimeout(displayClock, 1000);
}

function addLeadingZero(value) {
  if (value < 10) {
    return "0" + value;
  }
  return value;
}

// Start the clock
displayClock();
