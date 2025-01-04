// Array of sample dances with real Fortnite dance references or GIFs.
// NOTA: Las URLs que se muestran aquí son ejemplos de Internet o Giphy.
// Asegúrate de tener permisos para usarlas o bien aloja tus propias imágenes.
const dances = [
  {
    name: "Dance 1: Floss",
    gif: "https://media.giphy.com/media/3o7abBphvUK6l1F9Xa/giphy.gif",
    description: "You got the iconic Floss dance!"
  },
  {
    name: "Dance 2: Take the L",
    gif: "https://media.giphy.com/media/l4KhTZaJGNb5sQ2Ws/giphy.gif",
    description: "You got the savage Take the L dance!"
  },
  {
    name: "Dance 3: Orange Justice",
    gif: "https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif",
    description: "You got the groovy Orange Justice dance!"
  },
  {
    name: "Dance 4: Hype",
    gif: "https://media.giphy.com/media/2yxO90n7bty2YHM7fB/giphy.gif",
    description: "You got the energetic Hype dance!"
  },
  {
    name: "Dance 5: Electro Shuffle",
    gif: "https://media.giphy.com/media/9Pk2enI4xVeF5g6vHl/giphy.gif",
    description: "You got the iconic Electro Shuffle!"
  }
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
    // (Opcional) Guárdalo si planeas usarlo luego
    // localStorage.setItem("fortPlayerName", playerName);
    showMainScreen();
  });

  chestImg.addEventListener("click", openChest);
});
