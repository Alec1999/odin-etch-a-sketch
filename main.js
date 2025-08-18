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

    // Loop has to be here to work every time grid is created,
    // Otherwise, would only work on initial grid.
    for (const square of exsistingSquare) {
        square.addEventListener("mouseenter", (e) => {
            square.style.backgroundColor = "black";
        });
    };
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

newGridBtn.addEventListener("click", (e) => {
    currentGridSize = prompt("Enter grid size");
    deleteOldGrid();
    decideGridSize(currentGridSize);
});

// Create initial grid of 16 x 16
decideGridSize(currentGridSize);