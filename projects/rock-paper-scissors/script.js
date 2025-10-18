function getComputerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)]
}

function getHumanChoice() {
    return prompt("Enter your choice between rock, paper, and scissors: ")
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()

    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    console.log("It's a tie! Neither of you get points.")
                    break
                case "paper":
                    console.log("You lose! Paper beats rock.")
                    computerScore++
                    break
                case "scissors":
                    console.log("You win! Rock beats scissors.")
                    humanScore++
                    break
            }
            break
        case "paper":
            switch (computerChoice) {
                case "rock":
                    console.log("You win! Paper beats rock.")
                    humanScore++
                    break
                case "paper":
                    console.log("It's a tie! Neither of you get points.")
                    break
                case "scissors":
                    console.log("You lose! Scissors beats paper.")
                    computerScore++
                    break
            }
            break
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    console.log("You lose! Rock beats scissors.")
                    computerScore++
                    break
                case "paper":
                    console.log("You win! Scissors beats rock.")
                    humanScore++
                    break
                case "scissors":
                    console.log("It's a tie! Neither of you get points.")
                    break
            }
            break
        default:
            console.log(humanChoice + " is not an option. Please, try again.")
            break
    }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)

console.log("Human score: " + humanScore)
console.log("Computer score: " + computerScore)
