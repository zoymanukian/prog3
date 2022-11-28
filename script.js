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
    createCanvas(20 * side + 1, 20 * side + 1);
    background("#acacac")
}


function draww(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                if (weath == "spring") {
                    fill("#F10086")

                }
                else if (weath == "summer") {
                    fill("#3EC70B");
                }
                else if (weath == "winter") {
                    fill("white")
                }
                else if (weath == "autumn") {
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


        }
    }


    rect(x * side, y * side, side, side)
}




function Grass() {
    socket.emit("grass")
}
function GrassEater() {
    socket.emit("grassEater")
}
function Creator() {
    socket.emit("creator")
}
function Predator() {
    socket.emit("predator")
}
function Fertilizer() {
    socket.emit("fertilizer")
}
function Energy() {
    socket.emit("energy")
}
function Summer() {
    socket.emit("summer")
}
function Winter() {
    socket.emit("winter")
}
function Spring() {
    socket.emit("spring")
}
function Autumn() {
    socket.emit("autumn")
}
function Clear() {
    socket.emit("clear")
}
function Random() {
    socket.emit("random")
}
socket.on("send matrix", draww)
