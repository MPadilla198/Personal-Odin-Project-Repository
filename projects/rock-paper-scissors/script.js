function getComputerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)]
}

function getHumanChoice() {
    return prompt("Enter your choice between rock, paper, and scissors: ")
}

let humanScore = 0
let computerScore = 0