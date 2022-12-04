var side = 25;
var socket = io();

var btn = document.getElementById('btn'); 
var btn1 = document.getElementById('btn1'); 
var btn2 = document.getElementById('btn2'); 
var btn3 = document.getElementById('btn3'); 

function setup() {
  frameRate(25);
  createCanvas(25 * side + 1, 25 * side + 1);
  background('#acacac');
}
btn.addEventListener('click', function onClick() {
    document.body.style.backgroundColor = '#ADFF2F';
  });
  btn1.addEventListener('click', function onClick() {
    document.body.style.backgroundColor = '#7FFFD4';
  });
  btn2.addEventListener('click', function onClick() {
    document.body.style.backgroundColor = '#FF8C00';
  });
  btn3.addEventListener('click', function onClick() {
    document.body.style.backgroundColor = '#87CEEB';
  });


function draww(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                btn.addEventListener('click', function onClick() {
                    fill("green");
                });
                btn1.addEventListener('click', function onClick() {
                    fill("green");      
                });
                btn2.addEventListener('click', function onClick() { 
                    fill("orange");        
                });
                btn3.addEventListener('click', function onClick() {      
                    fill("white");    
                });
                
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




function GrassA() {
    socket.emit("grass")
}
function GrassEaterA() {
    socket.emit("grassEater")
}
function CreatorA() {
    socket.emit("creator")
}
function PredatorA() {
    socket.emit("predator")
}
function FertilizerA() {
    socket.emit("fertilizer")
}
function EnergyA() {
    socket.emit("energy")
}
function ClearA() {
    socket.emit("clear")
}
function RandomA() {
    socket.emit("random")
}
socket.on("send matrix", draww)
