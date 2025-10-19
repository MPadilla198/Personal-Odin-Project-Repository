function getComputerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)]
}

function getHumanChoice() {
    return prompt("Enter your choice between rock, paper, and scissors: ")
}


let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    const resultsDiv = document.querySelector("#results")

    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    resultsDiv.textContent = "It's a tie! Neither of you get points."
                    break
                case "paper":
                    resultsDiv.textContent = "You lose! Paper beats rock."
                    computerScore++
                    break
                case "scissors":
                    resultsDiv.textContent = "You win! Rock beats scissors."
                    humanScore++
                    break
            }
            break
        case "paper":
            switch (computerChoice) {
                case "rock":
                    resultsDiv.textContent = "You win! Paper beats rock."
                    humanScore++
                    break
                case "paper":
                    resultsDiv.textContent = "It's a tie! Neither of you get points."
                    break
                case "scissors":
                    resultsDiv.textContent = "You lose! Scissors beats paper."
                    computerScore++
                    break
            }
            break
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    resultsDiv.textContent = "You lose! Rock beats scissors."
                    computerScore++
                    break
                case "paper":
                    resultsDiv.textContent = "You win! Scissors beats paper."
                    humanScore++
                    break
                case "scissors":
                    resultsDiv.textContent = "It's a tie! Neither of you get points."
                    break
            }
            break
        default:
            resultsDiv.textContent = humanChoice + " is not an option. Please, try again."
            break
    }
}

let buttonRow = document.querySelector('#button-row')

buttonRow.addEventListener("click", function (event) {
    const target = event.target

    const computerSelection = getComputerChoice()

    switch (target.id) {
        case "rock":
            playRound("rock", computerSelection)
            break
        case "paper":
            playRound("paper", computerSelection)
            break
        case "scissors":
            playRound("scissors", computerSelection)
            break
    }
})