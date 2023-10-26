window.onload = () => {
    const gridContainer = document.getElementById("grid-container");
    let square = document.createElement("div");
    square.setAttribute("id", "square");
    square.style.cssText = 'width:30px; height:30px; border:2px solid black;';

    singleRow: 
    for (let i = 0; i <= 16; i++) {        
        
        gridContainer.appendChild(square.cloneNode(true));
    }
}