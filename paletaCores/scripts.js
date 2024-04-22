const generateButton = document.querySelector("#generate");
const colorsDiv = document.querySelector(".colors");
const input = document.querySelector("#qtd")

function generateColors() {
    colorsDiv.innerHTML = ""
    const quantity = parseInt(input.value);

    for(let i = 0; i < quantity; i++){
        const color = generateRandomColors();
        const colorDiv = document.createElement("div")
        colorDiv.style.backgroundColor = color
        const colorName = document.createElement("p")
        colorName.textContent = color;
        colorName.style.color = color;
        colorDiv.appendChild(colorName)
        colorsDiv.appendChild(colorDiv)
    }
}

function generateRandomColors() {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }

    return color;
}

generateButton.addEventListener("click", generateColors);