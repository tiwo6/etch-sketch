const container = document.querySelector(".container");
const sizeSelector = document.querySelector(".sizeSelector");

let gridSize = 16;

sizeSelector.addEventListener("click", function() {
    gridSize = prompt("Geben Sie eine Größe zwischen 1 und 100 ein!")
    while (document.querySelector(".grid") != null) {
        element = document.querySelector(".grid")
        element.remove();
    };    
    if (gridSize > 100) {
        createGrid(100);
    } else {
        createGrid(gridSize);
    }
})

container.addEventListener("mouseover", function(e) {
    if (e.target.value == "grid") {
        e.target.style.backgroundColor = "red";
    };
}) 
 
function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const newColumn = document.createElement("div");
        newColumn.classList = "grid", "column";
        newColumn.value = "grid";
        container.appendChild(newColumn)
        for (let j = 0; j < gridSize; j++) {
            const newRow = document.createElement("div");
            newRow.classList = "grid", "row";
            newRow.value = "grid";
            newColumn.appendChild(newRow)
        }
    }
}



createGrid(gridSize);