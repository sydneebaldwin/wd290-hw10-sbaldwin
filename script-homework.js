/*
WD290 — W10 - [Rock • Paper • Scissors] + Scoreboard + Design
Use this file as a HINT sheet. Copy the parts you need into your js/script.js.

Goal: Add a scoreboard (games, player wins, computer wins, ties) and update it every round.

*/

// =======================
// TODO 1) HTML you must add
// =======================
/*
Add this inside index.html:

<section class="scoreboard" aria-label="Scoreboard">
  <p>Games: <span id="games">0</span></p>
  <p>Player wins: <span id="playerWins">0</span></p>
  <p>Computer wins: <span id="computerWins">0</span></p>
  <p>Ties: <span id="ties">0</span></p>
</section>
*/

// =======================
// TODO 2) Select scoreboard elements (DOM)
// =======================

// const gamesEl = document.querySelector("#games");
// const playerWinsEl = document.querySelector("#playerWins");
// const computerWinsEl = document.querySelector("#computerWins");
// const tiesEl = document.querySelector("#ties");

// You can test it:
// console.log(gamesEl, playerWinsEl, computerWinsEl, tiesEl);

// =======================
// TODO 3) Score variables (STATE)
// =======================

// let games = 0;
// let playerWins = 0;
// let computerWins = 0;
// let ties = 0;

// =======================
// TODO 4) Update function
// =======================
// Put this below getWinner(player, computer):

/*
function updateScore(outcome) {
  // always count a game
  games = games + 1;

  // update the correct bucket
  if (outcome === "win") {
    playerWins = playerWins + 1;
  } else if (outcome === "lose") {
    computerWins = computerWins + 1;
  } else {
    ties = ties + 1;
  }

  // write scores to the page
  gamesEl.textContent = games;
  playerWinsEl.textContent = playerWins;
  computerWinsEl.textContent = computerWins;
  tiesEl.textContent = ties;
}
*/

// =======================
// TODO 5) Call updateScore(outcome) every click
// =======================
// Inside your click handler:

// updateScore(outcome);