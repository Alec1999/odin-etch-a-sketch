const gridContainer = document.getElementById("grid-container");
const newGridBtn = document.getElementById("buttons");
const exsistingSquare = document.getElementsByClassName("grid-square");
const totalGridPx = 800;
let currentGridSize = 16;

function createGridSquare() {
    const newSquare = document.createElement("div");
    newSquare.classList.add("grid-square");
    newSquare.style.height = ((totalGridPx / currentGridSize) + "px");
    newSquare.style.width = ((totalGridPx / currentGridSize) + "px");
    gridContainer.appendChild(newSquare);
};

function deleteOldGrid(){
    squaresArr = Array.from(exsistingSquare);

    while (squaresArr.length > 0) {
        squaresArr[0].remove();
        squaresArr.splice(0, 1);
    };
};

function decideGridSize (currentGridSize) {
    for (i = 0; i < (currentGridSize * currentGridSize); i++) { 
        createGridSquare();
    };
};

gridContainer.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid-square")) {
        e.target.classList.add("hovered");
    };
});

newGridBtn.addEventListener("click", (e) => {
    currentGridSize = prompt("Enter grid size (Max. 100)");
    while (currentGridSize > 100) {
        currentGridSize = prompt("Grid size cannot exceed 100. Enter new grid size");
    };
    deleteOldGrid();
    decideGridSize(currentGridSize);
});

// Create initial grid of 16 x 16
decideGridSize(currentGridSize);