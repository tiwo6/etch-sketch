const canvas = document.querySelector(".canvas");
const sizeSelector = document.querySelector(".sizeSelector");
const rubber = document.querySelector(".rubber");
const color = document.querySelector(".color");
const clear = document.querySelector(".clear");

let gridSize = 16;

clear.addEventListener("click", function() {
    document.querySelectorAll('.grid').forEach(function(item)
    {
        item.style.backgroundColor="white";
    });
})

sizeSelector.addEventListener("click", function() {
    gridSize = prompt("Enter a size between 1 and 100!")
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

rubber.addEventListener("click", function() {
    canvas.addEventListener("mouseover", function(e) {
        if (e.target.value == "grid") {
            e.target.style.backgroundColor = "white";
        };
    }) 
    
})

color.addEventListener("click", function() {
    let color = prompt("Enter a color")
    canvas.addEventListener("mouseover", function(e) {
        if (e.target.value == "grid") {
            e.target.style.backgroundColor = color;
        }})
}) 


canvas.addEventListener("mouseover", function(e) {
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
        canvas.appendChild(newBox)
    }
}

createGrid(gridSize);