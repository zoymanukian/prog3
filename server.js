var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);



app.use(express.static("."));

app.get('/', function (req, res) {

    res.redirect('index.html');

});

server.listen(3000, () => {
    console.log('connected');
});

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


Grass = require("./grass")
GrassEater = require("./grassEater")
Predator = require("./predator")
Creator = require('./creator')
Fertilizer = require('./fertilizer')
Energy = require('./energy')



function createObject() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                let pre = new Predator(x, y)
                predatorArr.push(pre)
            }
            else if (matrix[y][x] == 4) {
                let cre = new Creator(x, y)
                creatorArr.push(cre)
            }
            else if (matrix[y][x] == 5) {
                let fer = new Fertilizer(x, y)
                fertilizerArr.push(fer)
            }
            else if (matrix[y][x] == 6) {
                let en = new Energy(x, y)
                energyArr.push(en)
            }

        }
    }

    io.sockets.emit('send matrix', matrix)
}

function game() {
    for (let i in grassArr) {
        grassArr[i].mul()
    }
}

for (let i in grassEaterArr) {
    grassEaterArr[i].mul()
    grassEaterArr[i].eat()

}
for (let i in predatorArr) {
    predatorArr[i].mul()
    predatorArr[i].eat()
}
for (let i in creatorArr) {
    creatorArr[i].mul()
}

for (let i in fertilizerArr) {
    fertilizerArr[i].mul()
    fertilizerArr[i].eat()
}




io.sockets.emit("send matrix", matrix);


setInterval(game, 700)

function ClearA() {
    grassArr = [];
    grassEaterArr = [];
    predatorArr = [];
    creatorArr = [];
    fertilizerArr = [];
    energyArr = [];

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0;
        }
    }
}

function GrassA() {
    let x = Math.floor(Math.random() * 25)
    let y = Math.floor(Math.random() * 25)
    if (matrix[y][x] == 0) {
        matrix[y][x] = 1
        grassArr.push(new Grass(x, y));
    }
}

function GrassEaterA() {
    let x = Math.floor(Math.random() * 25)
    let y = Math.floor(Math.random() * 25)
    if (matrix[y][x] == 0) {
        matrix[y][x] = 2
        grassEaterArr.push(new GrassEater(x, y));
    }
}


function PredatorA() {
    let x = Math.floor(Math.random() * 25)
    let y = Math.floor(Math.random() * 25)
    if (matrix[y][x] == 0) {
        matrix[y][x] = 3
        predatorArr.push(new Predator(x, y));
    }
}

function CreatorA() {
    let x = Math.floor(Math.random() * 25)
    let y = Math.floor(Math.random() * 25)
    if (matrix[y][x] == 0) {
        matrix[y][x] = 4
        creatorArr.push(new Creator(x, y));
    }
}


function FertilizerA() {
    let x = Math.floor(Math.random() * 25)
    let y = Math.floor(Math.random() * 25)
    if (matrix[y][x] == 0) {
        matrix[y][x] = 5
        fertilizerArr.push(new Fertilizer(x, y));
    }
}


function EnergyA() {
    let x = Math.floor(Math.random() * 25)
    let y = Math.floor(Math.random() * 25)
    if (matrix[y][x] == 0) {
        matrix[y][x] = 6
        energyArr.push(new Energy(x, y));
    }
}

function RandomA() {
    generateMatrix(40, 40, 25, 20, 15, 4, 3,)
}


io.sockets.emit("send matrix", matrix)


io.on('connection', function (socket) {
    createObject();
    socket.on("grass", GrassA);
    socket.on("grassEater", GrassEaterA);
    socket.on("creator", CreatorA);
    socket.on("predator", PredatorA);
    socket.on("fertilizer", FertilizerA);
    socket.on("energy", EnergyA);
    socket.on("random", RandomA);
    socket.on("clear", ClearA);

});