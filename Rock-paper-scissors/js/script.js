console.log("script.js loaded");


// 1) Grab elements (DOM)
const resultEl = document.querySelector("#result");
const playerEl = document.querySelector("#playerChoice");
const computerEl = document.querySelector("#computerChoice");
const buttons = document.querySelectorAll(".choice");


console.log("resultEl:", resultEl);
console.log("playerEl:", playerEl);
console.log("computerEl:", computerEl);
console.log("buttons:", buttons);


// 2) Data
const choices = ["rock", "paper", "scissors"];

// 3) Computer picks randomly
function getComputerChoice() {
  const index = Math.floor(Math.random() * choices.length);
  console.log(index);
  return choices[index];
}

// 4) Decide winner
function getWinner(player, computer) {
  if (player === computer) {
    console.log("tie");
    return "tie";
  }

  const win =
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper");

  if (win) {
    console.log("win");
    return "win";
  } else {
    console.log("lose");
    return "lose";
  }
}

// 5) Clear + apply CSS classes (visual state)
function clearButtonStates() {
  buttons.forEach(function (buttonColor) {
    buttonColor.classList.remove("selected");
    buttonColor.classList.remove("win");
    buttonColor.classList.remove("lose");
    buttonColor.classList.remove("tie");
  });
}

function clearResultStates() {
  resultEl.classList.remove("win");
  resultEl.classList.remove("lose");
  resultEl.classList.remove("tie");
}

// 6) Update the UI
function render(player, computer, outcome, clickedButton) {
  playerEl.textContent = player;
  computerEl.textContent = computer;

  // Text result
  resultEl.textContent = "Result: " + outcome;

  // Class-based styling (highlight states)
  clearResultStates();
  resultEl.classList.add(outcome); // adds "win" or "lose" or "tie"

  clearButtonStates();
  clickedButton.classList.add("selected");
  clickedButton.classList.add(outcome); // optional: style the chosen button too
}

// 7) Wire up clicks
buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const player = btn.dataset.choice;
    const computer = getComputerChoice();
    const outcome = getWinner(player, computer);

    // Debugging (leave these in while building)
    console.log("player:", player);
    console.log("computer:", computer);
    console.log("outcome:", outcome);
    console.log("-------------");

    // Update the UI
    render(player, computer, outcome, btn);
  });
});