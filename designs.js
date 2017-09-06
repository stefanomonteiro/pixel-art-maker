// Select color input
// Select size input



// When size is submitted by the user, call makeGrid()

function makeGrid() {
    var height = document.getElementById("input_height").value;
    var width = document.getElementById("input_width").value;
    var table = document.getElementById("pixel_canvas");

    for (i = 0; i < height; i++){
        var rows = document.createElement("tr");
        // alert(height + " heigh works");
        for(j = 0; j < width; j++){
        var cells = document.createElement("td");
            // alert(width + " widht wroks");
                rows.appendChild(cells);
        }
    table.appendChild(rows);
    }
}
