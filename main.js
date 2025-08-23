const gridContainer = document.getElementById("grid-container");
const newGridBtn = document.getElementById("new-grid-btn");
const rgbBtn = document.getElementById("rgb-btn");
const eraseBtn = document.getElementById("erase-btn");
const exsistingSquare = document.getElementsByClassName("grid-square");
const totalGridPx = 800;
let currentGridSize = 16;
let rgbMode = 0;
let eraseMode = 0;

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

function chooseRandomColor() {
    let randomColorHex = "";
    let colorHexArr = [];

    for (i = 1; i < 7; i++){
        const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        colorHexArr.push(hexValues[Math.floor((Math.random() * 16))]);
        randomColorHex = colorHexArr.join("");
    };

    console.log("generated hex: ", randomColorHex)
    return randomColorHex;
};

gridContainer.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid-square")) {
        if ((rgbMode == 0) && (eraseMode == 0)) {
            e.target.style.backgroundColor = ("#000000");
        }
        else if (rgbMode == 1) {
            let randomColorHex = chooseRandomColor().toString();
            e.target.style.backgroundColor = ("#" + randomColorHex);
        }
        else {
            e.target.style.backgroundColor = ("#" + "FFFFFF");
        };
    };
});

newGridBtn.addEventListener("click", (e) => {
    currentGridSize = prompt("Enter grid size (Max. 100)");
    while (currentGridSize > 100) {
        currentGridSize = prompt("Grid size cannot exceed 100. Enter new grid size");
    };
    // If user cancels prompt.
    if (currentGridSize == null) {
        currentGridSize = 16;
    };
    deleteOldGrid();
    decideGridSize(currentGridSize);
});

rgbBtn.addEventListener("click", (e) => {
    if (rgbMode == 0) {
        rgbMode = 1;
        eraseMode = 0;
        rgbBtn.textContent = "RGB ON";
    }
    else {
        rgbMode = 0;
        rgbBtn.textContent = "RGB OFF";
    };
    eraseBtn.textContent = "Eraser OFF";
});

eraseBtn.addEventListener("click", (e) => {
    if (eraseMode == 0) {
        eraseMode = 1;
        rgbMode = 0;
        eraseBtn.textContent = "Eraser ON";
    }
    else {
        eraseMode = 0;
        eraseBtn.textContent = "Eraser OFF";
    };
    rgbBtn.textContent = "RGB OFF";
});
// Create initial grid of 16 x 16
decideGridSize(currentGridSize);