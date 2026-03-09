const container = document.querySelector("#container");

function createGrid(num) {
    for (let i = 1; i <= (num **2); i++) {
    const div = document.createElement("div");
    div.classList.add("grid-cell");
    div.style.height = `${100 / num}%`;
    div.style.width = `${100 / num}%`;
    container.appendChild(div);
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
const eraserButton = document.querySelector("#eraser-mode");
const defaultButton = document.querySelector("#default-mode");


function randomizeColor() {
    const first = Math.floor(Math.random() * 256);
    const second = Math.floor(Math.random() * 256);
    const third = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${first}, ${second}, ${third})`;
    return randomColor;
}

let rainbowMode = false;
let eraserMode = false;
let defaultMode = true;


rainbowButton.addEventListener("click", () => {
    rainbowMode = true;
    eraserMode = false;
    defaultMode = false;
    container.style.cursor = "url(signature_1378356.png), auto";
})

eraserButton.addEventListener("click", () => {
    eraserMode = true;
    rainbowMode = false;
    defaultMode = false;
    container.style.cursor = "url(eraser_11792401.png), auto";
})

defaultButton.addEventListener("click", () => {
    defaultMode = true;
    rainbowMode = false;
    eraserMode = false;
    container.style.cursor = "url(signature_1378356.png), auto";
})

let isDrawing = true;

document.addEventListener("keydown", (e) => {
    if (e.key === " ") {
        isDrawing = !isDrawing;
    }
})

container.addEventListener("mouseover", (e) => {
    if (isDrawing === false) {
        return;
    }
    if (e.target.matches(".grid-cell")) {
        if (rainbowMode) {
          e.target.style.backgroundColor = randomizeColor();
        }
        if (eraserMode) {
          e.target.style.backgroundColor = "";
        }
        if (defaultMode) {
          e.target.style.backgroundColor = "black";
        }
    }
})
