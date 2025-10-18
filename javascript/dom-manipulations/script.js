const container = document.querySelector("#container")

const content = document.createElement("div")
content.classList.add("content")
content.textContent = "This is the glorious text-content!"

container.appendChild(content)

// 1
const paragraph = document.createElement("p")
paragraph.style.color = "red"
paragraph.textContent = "Hey I'm red!"

container.appendChild(paragraph)

// 2
const heading3 = document.createElement("h3")
heading3.style.color = "blue"
heading3.textContent = "I'm a blue h3!"

container.appendChild(heading3)

// 3
const div = document.createElement("div")
div.style.borderStyle = "solid"
div.style.borderColor = "black"
div.style.backgroundColor = "pink"

const h1 = document.createElement("h1")
h1.textContent = "I'm in a div"
div.appendChild(h1)

const paragraph2 = document.createElement("p")
paragraph2.textContent = "ME TOO!"
div.appendChild(paragraph2)

container.appendChild(div)