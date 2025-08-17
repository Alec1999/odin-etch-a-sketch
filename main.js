const gridContainer = document.getElementById("grid-container");
const newGridBtn = document.getElementById("buttons");
const totalGridPx = 800;
let currentGridSize = 16;

function createGridSquare() {
    const newSquare = document.createElement("div");
    newSquare.classList.add("grid-square");
    newSquare.style.height = ((totalGridPx / currentGridSize) + "px");
    newSquare.style.width = ((totalGridPx / currentGridSize) + "px");
    gridContainer.appendChild(newSquare);
}

function createNewGrid() {
    // Create new grid size
}

function decideGridSize (currentGridSize) {
    for (i = 0; i < (currentGridSize * currentGridSize); i++) { 
        createGridSquare();
    }
}


const exsistingSquare = document.getElementsByClassName("grid-square");
for (const square of exsistingSquare) {
    square.addEventListener("mouseenter", (e) => {
        square.style.backgroundColor = "black";
    });
};

newGridBtn.addEventListener("click", (e) => {
    currentGridSize = prompt("Enter grid size");
});

decideGridSize(currentGridSize);