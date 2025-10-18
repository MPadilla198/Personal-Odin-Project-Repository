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