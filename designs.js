// Select color input
const color = document.getElementById("colorPicker").value;

// Select size input
const table = document.getElementById("pixel_canvas");

const setSize = function(){
    table.innerHTML = "";
    event.preventDefault();
    const height = document.getElementById("input_height").value;
    const width = document.getElementById("input_width").value;
    makeGrid(height, width);
 };


// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {

    for (let i = 0; i < height; i++){
        const rows = document.createElement("tr");
        for (let j = 0; j < width; j++){
        const cells = document.createElement("td");
        rows.appendChild(cells);
        cells.setAttribute("id", "cell" + [i]+[j]);
        cells.setAttribute("onclick", "drawPixels(this.id)");
        }
    table.appendChild(rows);
    }
}


function drawPixels(clicked_id){
    document.getElementById(clicked_id).style.backgroundColor = document.getElementById("colorPicker").value;
}



