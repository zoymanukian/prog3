var side = 20;
var socket = io();


weather = "autumn"
function weather(){
    weather = "autumn"
}

function weather(){
    weather = "spring"
}

function weather(){
    weather = "summer"
}

function weather(){
    weather = "winter"
}


function setup(){
    frameRate(5);
    createCanvas(matrix[0].length * side + 2, matrix.length * side + 2);
    background("#acacac")
}


function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == "autumn") {
                fill("yellow");
            }
            else if (matrix[y][x] == "spring") {
                fill("green");
            } else if (matrix[y][x] == "summer") {
                fill("green");
            } else if (matrix[y][x] == "winter") {
                fill("white");
            } 

            rect(x * side, y * side, side, side);


        }
    }
}