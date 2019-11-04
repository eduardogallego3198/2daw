class Ajedrez {
    tablero; ganaBlancas; ganaNegras;
    constructor() {
        this.tablero = new Array(8);
        for(let i = 0; i < this.tablero.length; i++)
            this.tablero[i] = new Array(8);
        for(let i = 0; i < this.tablero.length; i++) {
            this.tablero[1][i] = "pb";
            this.tablero[6][i] = "pn";
        }
        this.tablero[0][0] = 'tb'; this.tablero[0][7] = 'tb';
        this.tablero[7][0] = 'tn'; this.tablero[7][7] = 'tn';
        this.tablero[0][1] = 'cb'; this.tablero[0][6] = 'cb';
        this.tablero[7][1] = 'cn'; this.tablero[7][6] = 'cn';
        this.tablero[0][2] = 'ab'; this.tablero[0][5] = 'ab';
        this.tablero[7][2] = 'an'; this.tablero[7][5] = 'an';
        this.tablero[0][3] = 'rb'; this.tablero[0][4] = 'rab';
        this.tablero[7][3] = 'rn'; this.tablero[7][4] = 'ran';
        this.ganaBlancas = new Array();
        this.ganaNegras = new Array();
        for(let i = 0; i < this.tablero.length; i++) {
            for(let j = 0; j < this.tablero.length; j++)
                document.write(this.tablero[i][j] + " ");
            document.write("<br/>");
        }
    }

    moverPeonBlanco(pieza, antPos, nuePos) {
        if(nuePos == [(antPos[0] + 1), antPos[1]] 
            && this.tablero[nuePos[0]][nuePos[1]] == null)
            moverVacio(antPos, nuePos);
        else if(nuePos == [(antPos[0] + 1), (antPos[1] + 1 || antPos[1] - 1)] 
                && this.tablero[nuePos[0]][nuePos[1]] != null)
            moverLleno(pieza, antPos, nuePos);
        else 
            return "Movimiento no válido";
    }

    moverPeonNegro(pieza, antPos, nuePos) {
        if(nuePos == [(antPos[0] - 1), antPos[1]] 
            && this.tablero[nuePos[0]][nuePos[1]] == null)
            moverVacio(antPos, nuePos);
        else if(nuePos == [(antPos[0] - 1), (antPos[1] + 1 || antPos[1] - 1)] 
                && this.tablero[nuePos[0]][nuePos[1]] != null)
          moverLleno(pieza, antPos, nuePos);
        else 
            return "Movimiento no válido";
    }

    moverTorre(pieza, antPos, nuePos) {
        if(nuePos == [(nuePos[0] || antPos[0]), (antPos[1] || nuePos[1])] 
            && this.tablero[nuePos[0]][nuePos[1]] == null)
            moverVacio(antPos, nuePos);
        else if(nuePos == [(nuePos[0] || antPos[0]), (antPos[1] || nuePos[1])] 
                && this.tablero[nuePos[0]][nuePos[1]] != null)
            moverLleno(pieza, antPos, nuePos);
        else 
            return "Movimiento no válido";
    }

    moverCaballo(pieza, antPos, nuePos) {
        if(nuePos == [(antPos[0] + 2), (antPos[1] + 1 || antPos[1] - 1)] 
            && this.tablero[nuePos[0]][nuePos[1]] == null)
            moverVacio(antPos, nuePos);
        else if(nuePos == [(antPos[0] + 2), (antPos[1] + 1 || antPos[1] - 1)] 
               && this.tablero[nuePos[0]][nuePos[1]] != null)
            moverLleno(pieza, antPos, nuePos);
        else 
            return "Movimiento no válido";
    }

    moverAlfil(pieza, antPos, nuePos) {
        let diagonalValida = true;
        if((nuePos.indexOf(nuePos[0]) - antPos.indexOf(antPos[0])) - 
            (nuePos.indexOf(nuePos[1]) - antPos.indexOf(antPos[1])) != 0)
            diagonalValida = false;
        if(nuePos == [(nuePos.indexOf(nuePos[0]) - antPos.indexOf(antPos[0])), 
            (nuePos.indexOf(nuePos[1]) - antPos.indexOf(antPos[1]))] 
            && diagonalValida && this.tablero[nuePos[0]][nuePos[1]] == null)
            moverVacio(antPos, nuePos);
        else if(nuePos == [(nuePos.indexOf(nuePos[0]) - antPos.indexOf(antPos[0])), 
                (nuePos.indexOf(nuePos[1]) - antPos.indexOf(antPos[1]))] 
                && diagonalValida && this.tablero[nuePos[0]][nuePos[1]] != null)
            moverLleno(pieza, antPos, nuePos);
        else 
            return "Movimiento no válido";
    }

    moverRey(pieza, antPos, nuePos) {
        if(nuePos == [(antPos[0] + 1 || antPos[0] - 1 || antPos[0]), 
            (antPos[1] || antPos[1] + 1 || antPos[1] - 1)] 
            && this.tablero[nuePos[0]][nuePos[1]] == null)
            moverVacio(antPos, nuePos);
        else if(nuePos == [(antPos[0] + 1 || antPos[0] - 1 || antPos[0]), 
               (antPos[1] || antPos[1] + 1 || antPos[1] - 1)] 
                && this.tablero[nuePos[0]][nuePos[1]] != null)
            moverLleno(pieza, antPos, nuePos);
        else 
            return "Movimiento no válido";
    }

    moverReina(pieza, antPos, nuePos) {
        let diagonalValida = true;
        if((nuePos.indexOf(nuePos[0]) - antPos.indexOf(antPos[0])) - 
            (nuePos.indexOf(nuePos[1]) - antPos.indexOf(antPos[1])) != 0)
            diagonalValida = false;
        if(nuePos == [(nuePos.indexOf(nuePos[0]) - antPos.indexOf(antPos[0]) || antPos[0]), 
            (antPos[1] || nuePos.indexOf(nuePos[1]) - antPos.indexOf(antPos[1]))] 
            && diagonalValida && this.tablero[nuePos[0]][nuePos[1]] == null)
            moverVacio(antPos, nuePos);
        else if(nuePos == [(nuePos.indexOf(nuePos[0]) - antPos.indexOf(antPos[0]) || antPos[0]), 
                (antPos[1] || nuePos.indexOf(nuePos[1]) - antPos.indexOf(antPos[1]))] 
                && diagonalValida && this.tablero[nuePos[0]][nuePos[1]] != null)
            moverLleno(pieza, antPos, nuePos);
        else 
            return "Movimiento no válido";
    }

    moverBlanco(pieza, antPos, nuePos) {
        if(pieza == 'pb')
            moverPeonBlanco(pieza, antPos, nuePos);
        else if(pieza == 'tb')
            moverTorre(pieza, antPos, nuePos);
        else if(pieza == 'cb')
            moverCaballo(pieza, antPos, nuePos);
        else if(pieza == 'ab')
            moverAlfil(pieza, antPos, nuePos);
        else if(pieza == 'rb')
            moverRey(pieza, antPos, nuePos);
        else if(pieza == 'rab')
            moverReina(pieza, antPos, nuePos);
        for(let i = 0; i < this.ganaBlancas.length; i++)
            if(this.ganaBlancas[i] == 'rb')
                return "Ha ganado el blanco";
    }

    moverNegro(pieza, antPos, nuePos){
        if(pieza == 'pn')
            this.moverPeonNegro(pieza, antPos, nuePos);
        else if(pieza == 'tn')
            moverTorre(pieza, antPos, nuePos);
        else if(pieza == 'cn')
            moverCaballo(pieza, antPos, nuePos);
        else if(pieza == 'an')
            moverAlfil(pieza, antPos, nuePos);
        else if(pieza == 'rn')
            moverRey(pieza, antPos, nuePos);
        else if(pieza == 'ran')
            moverReina(pieza, antPos, nuePos);
        for(let i = 0; i < this.ganaNegras.length; i++)
            if(this.ganaNegras[i] == 'rb')
                return "Ha ganado el negro";
    }

    moverVacio(antPos, nuePos) {
        this.tablero[nuePos[0]][nuePos[1]] = this.tablero[antPos[0]][antPos[1]];
        this.tablero[antpos[0]][antpos[1]] = null;
    }

    moverLleno(pieza, antPos, nuePos) {
        if(pieza == 'pb' || pieza == 'tb' || pieza == 'cb' || pieza == 'ab' 
            || pieza == 'rb' || pieza == 'rab')
            this.ganaBlancas.push(this.tablero[nuePos[0]][nuePos[1]]);
        else
            this.ganaNegras.push(this.tablero[nuePos[0]][nuePos[1]]);
        this.tablero[nuePos[0]][nuePos[1]] = this.tablero[antPos[0]][antPos[1]];
        this.tablero[antPos[0]][antPos[1]] = null;
    }
}

var ajedrez = new Ajedrez();
document.write(ajedrez);