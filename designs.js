// Value color
const color = document.getElementById("colorPicker");

// Taskbar to prevent Default
var toggleSize = document.getElementById("sizePicker");

//place where the grid will be created
var canvas = document.getElementById("pixelCanvas");

//submit clicked, makeGrid will be called
toggleSize.addEventListener("submit", makeGrid);

//When canvas got clicked, call changeColor()
canvas.addEventListener("click", changeColor);

//When user presses submit, the function makeGrid will be called(2)
function makeGrid(event) {

    //prevent to "update"/"Default"
    event.preventDefault();

    //delete the previous canvas if there is one
    canvas.innerHTML = "";

    //Get user input about the grid's height and width
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;

    for(var y = 0; y < height; y++) {
        //Define the length of the grid
        var table = document.createElement("tr");
        //For each length, a horizontal line will be created
        for(var x = 0; x < width; x++) {
            var row = document.createElement("td");
            table.appendChild(row);
        }
        canvas.appendChild(table);
    }
};

/* When there is a clicked, an event will be sent. 
That is why there is the event in parameter */
function changeColor(event) {
    //nodeName to see, which html elements the target was
    //"TD" == Tablecell
    if(event.target.nodeName == "TD") {
        //change the color of the tablecell
        event.target.style.backgroundColor = color.value;
    }
}
