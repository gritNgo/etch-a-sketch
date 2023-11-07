const container = document.getElementById("container");
const rows = document.getElementsByClassName("gridRow");
const cells = document.getElementsByClassName("cell");


const newGridBtn = document.createElement("button");
document.body.appendChild(newGridBtn).className = "newGridBtn";
newGridBtn.textContent = "New grid";

newGridBtn.addEventListener("click", () => {
    let newRows = prompt(`Enter new number of rows: `);
    let newCells = prompt(`Enter new number of cells: `);
    container.innerHTML = '';
    
    function newGrid() {
        createNewRows(newRows);
        createNewCells(newCells);
    }
    function createNewRows(newRows) {
        for (let r = 0; r < newRows; r++) {
            let rows = document.createElement("div");
            container.appendChild(rows).className = "gridRow";
        }
    }
    function createNewCells(newCellNum) {
        for (let i = 0; i < rows.length; i++) {
            for (j = 0; j < newCellNum; j++) {
                let newCell = document.createElement("div");
                rows[j].appendChild(newCell).className = "cell";
    
                newCell.addEventListener("mouseover", () => {
                    newCell.style.backgroundColor = "black"
                });
            }
        }
    }
    newGrid();

});

function defaultGrid() {    
    createRows(16);
    createCells(16);
}

function createRows(rowNum) {
    for (let r = 0; r < rowNum; r++) {
        let rows = document.createElement("div");
        container.appendChild(rows).className = "gridRow";
    }
}

function createCells(cellNum) {
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

