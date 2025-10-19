const container = document.querySelector(".container")

const SIZE = 16

for (let i = 0; i < SIZE; i++) {
    const row = document.createElement("div")
    row.classList.add("row")

    for (let j = 0; j < SIZE; j++) {
        const column = document.createElement("div")
        column.classList.add("col")

        column.addEventListener("mouseenter", (event) => {
            column.style.backgroundColor = "blue"
        })

        row.appendChild(column)
    }

    container.appendChild(row)
}