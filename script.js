// We have multiple dances stored in an array for random selection.
const dances = [
  {
    name: "Dance 1: Take the L",
    gif: "images/convertedTakeTheLDance.gif",
    description: "You got the savage 'Take the L' dance!"
  },
  {
    name: "Dance 2: Floss",
    gif: "https://media.giphy.com/media/3o7abBphvUK6l1F9Xa/giphy.gif",
    description: "You got the iconic Floss dance!"
  },
  {
    name: "Dance 3: Electro Shuffle",
    gif: "https://media.giphy.com/media/9Pk2enI4xVeF5g6vHl/giphy.gif",
    description: "You got the legendary Electro Shuffle!"
  },
  // Add more dances if you like...
];

function showMainScreen() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("main-screen").classList.remove("hidden");
  document.getElementById("extra-decorations").classList.remove("hidden");
}

// Randomly pick a dance and display it
function openChest() {
  const randomDance = dances[Math.floor(Math.random() * dances.length)];
  document.getElementById("dance-name").textContent = randomDance.name;
  document.getElementById("dance-gif").src = randomDance.gif;
  document.getElementById("dance-description").textContent = randomDance.description;

  document.getElementById("dance-result").classList.remove("hidden");
}

window.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enter-btn");
  const chestImg = document.getElementById("chest-img");

  // Start Screen -> Main Screen
  enterBtn.addEventListener("click", () => {
    const playerName = document.getElementById("player-name").value.trim();
    if (playerName === "") {
      alert("Please enter your name first.");
      return;
    }
    showMainScreen();
  });

  // Clicking the chest -> Show random dance
  chestImg.addEventListener("click", openChest);

  // Randomize floating decorations positions
  const decorImages = document.querySelectorAll(".floating-decor");
  decorImages.forEach((img) => {
    // Random position within the viewport
    const randomTop = Math.random() * 80 + 10;   // 10% to 90%
    const randomLeft = Math.random() * 80 + 10;  // 10% to 90%
    img.style.top = randomTop + "%";
    img.style.left = randomLeft + "%";
  });
});
