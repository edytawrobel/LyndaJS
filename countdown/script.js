var secondsRemaining;
var intervalHandle;

function resetPage() {
  document.getElementById("inputArea").style.display = "block";
}

function tick() {
  var timeDisplay = document.getElementById("time");

  // turn seconds into mm:ss
  var min = Math.floor(secondsRemaining / 60);
  var sec = secondsRemaining - (min * 60);

  //add a leading zero if seconds less than 10
  if (sec < 10) {
    sec = "0" + sec;
  }

  //concatenate with colon
  var message = min.toString() + ":" + sec;
  //now change the displa\
  timeDisplay.innerHTML = message;

  //stop id down to zero
  if (secondsRemaining === 0) {
    alert("Time's up!");
    clearInterval(intervalHandle);
    resetPage();
  }
  //subtract froms seconds remaining
  secondsRemaining--;
}

function startCountdown() {
  //get contents od the "minutes" text box
  var minutes = document.getElementById("minutes").value;
  // check if number
  if (isNaN(minutes)) {
    alert("Please enter a number!");
    return;
  }
  // how many seconds?
  secondsRemaining = minutes * 60;
  // every second, call the "tick" function
  intervalHandle = setInterval(tick, 1000);
  //hide the submit button, so it does not shwo when the clock is ticking
  document.getElementById("inputArea").style.display = "none";
}


window.onload = function () {
  //create input text box and give it an id of "minutes"
  var inputMinutes = document.createElement("input");
  inputMinutes.setAttribute("id", "minutes");
  inputMinutes.setAttribute("type", "text");
  //create button
  var startButton = document.createElement("input");
  startButton.setAttribute("type", "button");
  startButton.setAttribute("value", "Start Countdown");
  startButton.onclick = function () {
    startCountdown();
  };
  //add to the DOM, to the div called "inputArea"
  document.getElementById("inputArea").appendChild(inputMinutes);
  document.getElementById("inputArea").appendChild(startButton);
};
