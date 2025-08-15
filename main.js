function createGridSquare() {
    const gridContainer = document.getElementById("grid-container");
    const newSquare = document.createElement("div");
    newSquare.classList.add("grid-square");
    newSquare.style.height = ((800 / 16) + "px");
    newSquare.style.width = ((800 / 16) + "px");
    gridContainer.appendChild(newSquare);
}

for (i = 0; i < (16 * 16); i++) { 
    createGridSquare();
}