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
    console.log(e.target.value)
    if (e.target.value == "grid") {
        e.target.style.backgroundColor = "red";
    };
}) 
 
function createGrid(gridSize) {
    for (let i = 0; i < gridSize*gridSize; i++) {
        const newBox = document.createElement("div");
        newBox.classList = "grid";
        newBox.value = "grid";
        let size = 400 / gridSize;
        newBox.style.height = `${size}px`;
        newBox.style.width = `${size}px`;
        newBox.style.boxSizing ="border-box";
        container.appendChild(newBox)
    }
}

createGrid(gridSize);