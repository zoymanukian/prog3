var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);



app.use(express.static("."));

app.get('/', function (req, res) {

    res.redirect('index.html');

});

server.listen(3000);


grassArr = []
grassEaterArr = []
predatorArr = []
creatorArr = []
fertilizerArr = []
energyArr = []
matrix = [];

function generateMatrix(matLen, gr, grEat, pr, cre, fer, en) {
  
    for (let i = 0; i < matLen; i++) {
        matrix[i] = []
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0
        }
    }

    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
    }
    for (let i = 0; i < pr; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }
    }
    for (let i = 0; i < cre; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }
    }
    for (let i = 0; i < fer; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
        }
    }
    for (let i = 0; i < en; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 6
        }
    }

    


}


generateMatrix(25, 10, 5, 10, 6, 3, 4)
io.sockets.emit('send matrix', matrix)


weath = "winter"


Grass = require("./grass")
GrassEater = require("./grassEater")
Predator = require("./predator")
Creator = require('./creator')
Fertilizer = require('./fertilizer')
Energy = require('./energy')


function createObject(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let gr = new GrassEater(x, y)
                grassEaterArr.push(gr)
            } else if (matrix[y][x] == 3) {
                let gr = new Predator(x, y)
                predatorArr.push(gr)
            }
            else if (matrix[y][x] == 4) {
                let gr = new Creator(x, y)
                creatorArr.push(gr)
            }
            else if (matrix[y][x] == 5) {
                let gr = new Fertilizer(x, y)
                fertilizerArr.push(gr)
            }
            else if (matrix[y][x] == 6) {
                let gr = new Energy(x, y)
                energyArr.push(gr)
            }

        }
    }

    io.sockets.emit('send matrix', matrix)
}

function game() {
    for (let i in grassArr) {
        grassArr[i].eat()
        grassArr[i].mul()
    }
}

for (let i in grassEaterArr) {
    grassEaterArr[i].eat()

}
for (let i in predatorArr) {
    predatorArr[i].eat()
}
io.sockets.emit("send matrix", matrix);



setInterval(game, 700)


io.on('connection', function (socket) {
    createObject();
    socket.on("grass", grass);
    socket.on("grassEater", grassEater);
    socket.on("creator", creator);
    socket.on("predator", predator);
    socket.on("energy", energy);

});