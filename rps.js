function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    const idCh = Math.floor(Math.random()*choices.length)
    return choices[idCh]
}

function getHumanChoice() {
   const input = prompt("Scegli: Rock, Paper o Scissors")
   if (input === null) return null

   const cleaned = input.trim().toLowerCase()

   if (cleaned === "rock") return "Rock"
   if (cleaned === "paper") return "Paper"
   if (cleaned === "scissors") return "Scissors"

   return null
}

// console.log(getHumanChoice())
// console.log(getComputerChoice())

function playRound(humanScore, computerScore) {
    const c=getComputerChoice()
    const h=getHumanChoice()
    
    if (c === h) { 
        console.log("Pareggio!")
        return "p"
    }

    const humanWon =
        (h === "Rock" && c === "Scissors") ||
        (h === "Paper" && c === "Rock") ||
        (h === "Scissors" && c === "Paper")
    
    if (humanWon) {
        console.log("Hai vinto! " + h + " batte " + c + ".")
        return result="h"
    }
    else {
        console.log("Hai perso!" + c + " batte " + h + ".")
        return result="c"
    }
}
// console.log(playRound())
// console.log("Umano: " + humanScore + " PC: " + computerScore)

function playGame() {
    let humanScore = 0
    let computerScore = 0

    for (let i=0; i <5; i++) {
        result = playRound()
        
        if (result === "h") {
            humanScore++
        }
        if (result === "c") {
            computerScore++
        }
        
        console.log("Umano: " + humanScore + " PC: " + computerScore)
    }

    const winner = humanScore === 5 ? "Umano" : "PC"

    console.log(`\n FIne partita! Vince: ${winner} (${humanScore} - ${computerScore})`)

    return {winner, humanScore, computerScore}
}

console.log(playGame())


