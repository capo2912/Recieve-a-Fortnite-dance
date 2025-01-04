// Array of sample dances (you can replace with real Fortnite dances)
const dances = [
  {
    name: "Dance 1: Floss",
    gif: "https://via.placeholder.com/200?text=Floss",
    description: "You got the iconic Floss dance!"
  },
  {
    name: "Dance 2: Take the L",
    gif: "https://via.placeholder.com/200?text=Take+the+L",
    description: "You got the savage Take the L dance!"
  },
  {
    name: "Dance 3: Orange Justice",
    gif: "https://via.placeholder.com/200?text=Orange+Justice",
    description: "You got the groovy Orange Justice dance!"
  },
  {
    name: "Dance 4: Hype",
    gif: "https://via.placeholder.com/200?text=Hype",
    description: "You got the energetic Hype dance!"
  },
  // Add as many as you like...
];

// Function to show the main screen
function showMainScreen() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("main-screen").classList.remove("hidden");
}

// Function to open the chest and show a random dance
function openChest() {
  // Pick a random dance
  const randomDance = dances[Math.floor(Math.random() * dances.length)];

  // Fill in the details
  document.getElementById("dance-name").textContent = randomDance.name;
  document.getElementById("dance-gif").src = randomDance.gif;
  document.getElementById("dance-description").textContent = randomDance.description;

  // Show the dance result section
  document.getElementById("dance-result").classList.remove("hidden");
}

// Event listeners
window.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enter-btn");
  const chestImg = document.getElementById("chest-img");

  enterBtn.addEventListener("click", () => {
    const playerName = document.getElementById("player-name").value;
    if (playerName.trim() === "") {
      alert("Please enter your name first.");
      return;
    }
    // You could store the player's name if you want to use it later
    // e.g. localStorage.setItem("fortPlayerName", playerName);
    showMainScreen();
  });

  chestImg.addEventListener("click", openChest);
});
