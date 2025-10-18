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