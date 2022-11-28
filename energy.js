var LivingCreature = require("./livingcreature");

module.exports = class Energy extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 17

    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    mul() {
        var emptyCells = this.chooseCell(0);
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;

            var newenergyArr = new Energy(newX, newY);
            energyArr.push(newenergyArr);
            this.energy = 17
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in energyArr) {
            if (this.x == energyArr[i].x && this.y == energyArr[i].y) {
                energyArr.splice(i, 1);
                break;
            }
        }
    }

}