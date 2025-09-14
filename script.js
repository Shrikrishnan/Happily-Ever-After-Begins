var countDownDate = new Date("Sep 07, 2022 06:08:00").getTime();

// Update every second
var x = setInterval(function () {
  var now = new Date().getTime();

  // Distance (can be negative)
  var distance = countDownDate - now;

  // Work with absolute value for breakdown
  var absDist = Math.abs(distance);

  // Time calculations
  var days = Math.floor(absDist / (1000 * 60 * 60 * 24));
  var hours = Math.floor((absDist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((absDist % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((absDist % (1000 * 60)) / 1000);

  // Add leading zeros
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Show sign if negative
  var sign = distance < 0 ? "-" : "";
  // Display the Result
  document.getElementById("days").innerHTML = sign + days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-btn");
  const body = document.body;

  // Check system theme
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Apply saved preference OR system default
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
  } else {
    body.classList.add(prefersDark ? "dark" : "light");
  }

  // Update button text
  function updateButton() {
    if (body.classList.contains("dark")) {
      toggleBtn.textContent = "☀️ Light Mode";
    } else {
      toggleBtn.textContent = "🌙 Dark Mode";
    }
  }
  updateButton();

  // Toggle theme on button click
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");

    // Save preference
    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }

    updateButton();
  });
});

