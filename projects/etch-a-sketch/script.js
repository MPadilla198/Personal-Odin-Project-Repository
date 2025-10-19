const container = document.querySelector(".container")

const resetButton = document.querySelector("#reset-button")

resetButton.addEventListener("click", (event) => {
    const size = prompt("How many squares per side? (Limit: 100)")
    if (size <= 0) {
        alert("The number of boxes per side may not be less than or equal to zero.")
    } else if (size > 100) {
        alert("The limit of the number of boxes per side is 100. Please, choose a number less than or equal to 100.")
    } else {
        buildScreen(size)
    }
})

function getRandomRgbString() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`
}

function buildScreen(size) {
    // Clear the board
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }

    // Add new
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div")
        row.classList.add("row")

        for (let j = 0; j < size; j++) {
            const column = document.createElement("div")
            column.classList.add("col")
            column.style.opacity = "100%"

            column.addEventListener("mouseenter", (event) => {

                column.style.backgroundColor = getRandomRgbString()
                if (column.style.opacity > 0.0) {
                    column.style.opacity -= 0.1
                }
            })

            row.appendChild(column)
        }

        container.appendChild(row)
    }
}

const SIZE = 16

buildScreen(SIZE)