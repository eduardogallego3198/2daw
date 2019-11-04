class Puzzle {
    dimension; tablero;

    constructor(dim) {
        this.dimension = dim;
        this.tablero = new Array(this.dimension);
        for(let i = 0; i < this.dimension; i++)
            this.tablero[i] = new Array(this.dimension);
    }

    comenzar() {
        let aux = 0;
        for(let i = 0; i < this.dimension; i++)
            for(let j = 0; j < this.dimension; j++)
                this.tablero[i][j] = aux++;
        this.tablero.sort(function() {return Math.random() - 0.25});
        for(let i = 0; i < this.dimension; i++) {
            for(let j = 0; j < this.dimension; j++)
                document.write(this.tablero[i][j] + " ");
            document.write("<br/>");
        }
    }
}

var puzzle = new Puzzle(4);
document.write(puzzle.comenzar());