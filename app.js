document.addEventListener("DOMContentLoaded", () => {
  const playerChoiceDisplay = document.getElementById("player-choice")
  const computerChoiceDisplay = document.getElementById("computer-choice")
  const resultDisplay = document.getElementById("result")
  const playerScoreDisplay = document.getElementById("player-score")
  const computerScoreDisplay = document.getElementById("computer-score")
  const choiceButtons = document.querySelectorAll(".choice-btn")
  const resetButton = document.getElementById("reset-btn")

  let playerScore = 0
  let computerScore = 0

  const choices = ["Rock", "Paper", "Scissors"]

  function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
  }

  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a draw!"
    } else if (
      (playerChoice === "Rock" && computerChoice === "Scissors") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
      playerScore++
      return "You win!"
    } else {
      computerScore++
      return "You lose!"
    }
  }

  function updateScore() {
    playerScoreDisplay.textContent = playerScore
    computerScoreDisplay.textContent = computerScore
  }

  function resetGame() {
    playerScore = 0
    computerScore = 0
    updateScore()
    playerChoiceDisplay.textContent = ""
    computerChoiceDisplay.textContent = ""
    resultDisplay.textContent = ""
    resultDisplay.classList.remove("win", "draw")
  }

  choiceButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const playerChoice = e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1) // Capitalize first letter
      const computerChoice = getComputerChoice()

      playerChoiceDisplay.textContent = playerChoice
      computerChoiceDisplay.textContent = computerChoice

      const result = determineWinner(playerChoice, computerChoice)
      resultDisplay.textContent = result

      // Update result display class for styling
      resultDisplay.classList.remove("win", "draw")
      if (result === "You win!") {
        resultDisplay.classList.add("win")
      } else if (result === "It's a draw!") {
        resultDisplay.classList.add("draw")
      }

      updateScore()
    })
  })

  resetButton.addEventListener("click", resetGame)

  // Initial score update
  updateScore()
})
