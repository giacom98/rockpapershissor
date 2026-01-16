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

document.querySelector(".buttons").addEventListener("click", (e) => {
    const choice =getHumanChoice(e)
    if (!choice) return
    console.log(choice)
})


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
// }
// function playGame() {
//     let humanScore = 0
//     let computerScore = 0

//     for (let i=0; i <1000; i++) {
//         result = playRound()
        
//         if (result === "h") {
//             humanScore++
//         }
//         if (result === "c") {
//             computerScore++
//         }
        
//         console.log("Umano: " + humanScore + " PC: " + computerScore)
//     }

//     const winner = humanScore === 5 ? "Umano" : "PC"

//     console.log(`\n Fine partita! Vince: ${winner} (${humanScore} - ${computerScore})`)

//     return {winner, humanScore, computerScore}
// }

// console.log(playGame())

