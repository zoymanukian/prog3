var side = 20;
var socket = io();


weath = "autumn"
function weath() {
    weath = "autumn"
}

function weath() {
    weath = "spring"
}

function weath() {
    weath = "summer"
}

function weath() {
    weath = "winter"
}


function setup() {
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


for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {

        if (matrix[y][x] == 1) {
            if(weath == "spring")
            {
                fill("#F10086")
            
            }
            else if(weath == "summer")
            {
                fill("#3EC70B");
            }
            else if(weath == "winter")
            {
                fill("white")
            }
            else if(weath == "autumn")
            {
                fill("#EC9B3B")
            }
            rect(x * side, y * side, side, side);
        }
        else if (matrix[y][x] == 0) {
            fill("#acacac");
        }
        else if (matrix[y][x] == 2) {
            fill("yellow");
        }
        else if (matrix[y][x] == 3) {
            fill("red");
        }
        else if (matrix[y][x] == 4) {
            fill("blue");
        }
        else if (matrix[y][x] == 5) {
            fill("black");
        }
        else if (matrix[y][x] == 6) {
            fill("purple");
        }
       

        rect(x * side, y * side, side, side);


    }
}




setInterval(function () 
{socket.on('send matrix', draw)
},1000
)
socket.on("weather", function (data)
{
    weath = data;
})
function grass() {
socket.emit("grass")
}
function grassEater() {
socket.emit("grassEater")
}
function creator() {
socket.emit("creator")
}
function predator() {
socket.emit("predator")
}
function energy() {
socket.emit("energy")
}
