const container = document.querySelector("#container");

function createGrid(num) {
    for (let i = 1; i <= (num **2); i++) {
    const div = document.createElement("div");
    div.classList.add("grid-cell");
    div.style.height = `${100 / num}%`;
    div.style.width = `${100 / num}%`;
    container.appendChild(div);

    div.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "green";
    })
}}

createGrid(16);

const gridSizePrompt = document.querySelector("#grid-size");

gridSizePrompt.addEventListener("click", () => {
    const userChoice = prompt("Enter number of squares per side (maximum value is 100)");
    if (userChoice.trim() === "" || Number.isInteger(+userChoice) === false) {
        alert("Please enter a numeric value.");
        return;
    } else if (+userChoice > 100) {
        alert("Please enter a value less than 100");
        return;
    } else {
        while (container.firstChild) {
        container.removeChild(container.firstChild);
}

      createGrid(+userChoice);
    }
})

const cleanBoard = document.querySelector("#clean-board");

cleanBoard.addEventListener("click", () => {
    const allCells = document.querySelectorAll(".grid-cell");

    allCells.forEach(cell => {
        cell.style.backgroundColor = "";
    })
})

const rainbowButton = document.querySelector("#rainbow-mode");

function randomizeColor() {
    const first = Math.floor(Math.random() * 256);
    const second = Math.floor(Math.random() * 256);
    const third = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${first}, ${second}, ${third})`;
    return randomColor;
}

let rainbowMode = false;

rainbowButton.addEventListener("click", () => {
    rainbowMode = true;
})

container.addEventListener("mouseover", (e) => {
    if (rainbowMode === true && e.target.matches(".grid-cell")) {
       e.target.style.backgroundColor = randomizeColor();
       e.target.style.opacity = 0.7;
    }
})