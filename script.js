console.log("Test");

const container = document.querySelector(".container");

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const newColumn = document.createElement("div");
        newColumn.className = "gridColumn";
        container.appendChild(newColumn)
        for (let j = 0; j < gridSize; j++) {
            const newRow = document.createElement("div");
            newRow.className = "gridRow";
            newColumn.appendChild(newRow)
        }
    }
}

let gridSize = 16;

createGrid(gridSize);