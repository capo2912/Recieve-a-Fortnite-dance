// Array of dances
const dances = [
  "Floss",
  "Take the L",
  "Electro Shuffle",
  "Orange Justice",
  "Hype",
  "Breakin'",
  "Groove Jam",
  "Disco Fever",
  "Fresh",
];

// Show the main screen
function showMainScreen() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("main-screen").classList.remove("hidden");
}

// Display a random dance name
function displayDance() {
  const randomDance = dances[Math.floor(Math.random() * dances.length)];
  const danceNameElement = document.getElementById("dance-name");

  // Show the dance name
  danceNameElement.textContent = randomDance;
  danceNameElement.classList.remove("hidden");
}

// Event listeners
window.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enter-btn");
  const danceBtn = document.getElementById("dance-btn");

  // Switch to the main screen
  enterBtn.addEventListener("click", () => {
    const playerName = document.getElementById("player-name").value.trim();
    if (playerName === "") {
      alert("Please enter your name first.");
      return;
    }
    showMainScreen();
  });

  // Show dance name on button click
  danceBtn.addEventListener("click", displayDance);
});
