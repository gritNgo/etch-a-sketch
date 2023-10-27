window.onload = () => {
    const container = document.getElementById("container");
    const rows = document.getElementsByClassName("gridRow");
    const cells = document.getElementsByClassName("cell");

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
            }
        }
    }
    defaultGrid();
}