function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    const idCh = Math.floor(Math.random()*choices.length)
    return choices[idCh]
}

function getHumanChoice(e) {
    const btn = e.target.closest(".buttons button")
    if (!btn) return null
    return btn.dataset.choice
}

function playRound(h) {
    const c=getComputerChoice()
    const results = document.querySelector(".results")
    const row = document.createElement("p")

    if (c === h) { 
        row.textContent += "Pareggio!"
        result="p"
        results.appendChild(row)
        return result
    }

    const humanWon =
        (h === "Rock" && c === "Scissors") ||
        (h === "Paper" && c === "Rock") ||
        (h === "Scissors" && c === "Paper")
    
    if (humanWon) {
        row.textContent += `Hai vinto! ${h} batte ${c}`
        result="h"
    }
    else {
        row.textContent += `Hai perso! ${c} batte ${h}`
        result="c"
    }
    results.appendChild(row)
    return result
}

function playGame(humanChoice) {
    if (roundsPlayed >= MAX_ROUNDS) return

    const result = playRound(humanChoice)
    roundsPlayed++

    if (result === "h") humanScore++
    if (result === "c") computerScore++

    if (roundsPlayed === MAX_ROUNDS) {
        const results = document.querySelector(".results")
        const final = document.createElement("p")

        if (humanScore > computerScore) {
            final.textContent = `Hai vinto la partita ${humanScore} a ${computerScore}!`
        } else if (computerScore > humanScore) {
            final.textContent = `Il computer ha vinto ${computerScore} a ${humanScore}.`
        } else {
            final.textContent = `Pareggio finale ${humanScore} a ${computerScore}.`
        }

        final.style.fontWeight = "bold"
        results.appendChild(final)
    }
}

let humanScore = 0
let computerScore = 0
let roundsPlayed = 0
const MAX_ROUNDS = 5

document.querySelector(".buttons").addEventListener("click", (e) => {
    const choice =getHumanChoice(e)
    if (!choice) return

    playGame(choice)
})


