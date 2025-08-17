const gridContainer = document.getElementById("grid-container");

function createGridSquare() {
    const newSquare = document.createElement("div");
    newSquare.classList.add("grid-square");
    newSquare.style.height = ((800 / 16) + "px");
    newSquare.style.width = ((800 / 16) + "px");
    gridContainer.appendChild(newSquare);
}

for (i = 0; i < (16 * 16); i++) { 
    createGridSquare();
}

const exsistingSquare = document.getElementsByClassName("grid-square");
for (const square of exsistingSquare) {
    square.addEventListener("mouseenter", (e) => {
        square.style.backgroundColor="black";
    });
};