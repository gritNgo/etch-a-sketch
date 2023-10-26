window.onload = () => {
    const container = document.getElementById("container");

    let row = document.createElement("div");
    row.setAttribute("id", "row");
    row.style.cssText = "width: 20px; height: 20px; border:1px solid black; margin: 0;";

    function defaultGrid() {
    // all divs`
    for (let i = 0; i < 16 * 16; i++) {
        // single div
        container.appendChild(row.cloneNode(true));
        }
    }    
    defaultGrid();
}