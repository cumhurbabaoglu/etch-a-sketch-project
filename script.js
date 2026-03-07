const container = document.querySelector("#container");

for (let i = 1; i <= 256; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-cell");
    container.appendChild(div);

    div.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "green";
    })
}

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

      for (let i = 1; i <= ((+userChoice) ** 2); i++) {
        const div = document.createElement("div");
        div.classList.add("grid-cell");
        div.style.height = `${100 / +userChoice}%`;
        div.style.width = `${100 / +userChoice}%`;
        container.appendChild(div);

        div.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "green";
    })
      }
    }
})

const cleanBoard = document.querySelector("#clean-board");

cleanBoard.addEventListener("click", () => {
    const allCells = document.querySelectorAll(".grid-cell");

    allCells.forEach(cell => {
        cell.style.backgroundColor = "white";
    })
})
