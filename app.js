const container = document.getElementById("container");
const rows = document.getElementsByClassName("gridRow");
const cells = document.getElementsByClassName("cell");


const newGridBtn = document.createElement("button");
document.body.appendChild(newGridBtn).className = "newGridBtn";
newGridBtn.textContent = "New grid";

function getSize(newRows, newColumns) {
    newRows = prompt(`Enter new number of rows: `);
    newColumns = prompt(`Enter new number of columns: `);

}
newGridBtn.addEventListener("click", () => {
    getSize(newRows, newColumns);
    console.log(`${newRows}, ${newColumns}`);
});



function defaultGrid() {    
    makeRows(16);
    makeCells(16);
}

function makeRows(rowNum) {
    for (let r = 0; r < rowNum; r++) {
        let rows = document.createElement("div");
        container.appendChild(rows).className = "gridRow";
    }
}

function makeCells(cellNum) {
    for (let i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";

            newCell.addEventListener("mouseover", () => {
                newCell.style.backgroundColor = "black"
            });
        }
    }
}
defaultGrid();

