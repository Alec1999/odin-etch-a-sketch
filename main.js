function createGridSquare() {
    const gridContainer = document.getElementById("grid-container");
    const newSquare = document.createElement("div");
    newSquare.classList.add("grid-square");
    gridContainer.appendChild(newSquare);
}

// for (i = 0; i < 16; i++) { // Should be number of columns
for (j = 0; j < 1; j++) { // should be number of rows
    createGridSquare();
}
//}
    

 