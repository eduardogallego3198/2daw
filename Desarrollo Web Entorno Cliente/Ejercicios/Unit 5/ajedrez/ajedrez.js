class Ajedrez {
    tablero; ganadasNegro; ganadasBlanco;

    constructor() {
        this.tablero = new Array(8);
        for (let i = 0; i < 8; i++)
            this.tablero[i] = new Array(8);
        this.tablero[0][0] = "tn"; this.tablero[0][7] = "tn";
        this.tablero[7][0] = "tb"; this.tablero[7][7] = "tb";
        this.tablero[0][1] = "cn"; this.tablero[0][6] = "cn";
        this.tablero[7][1] = "cb"; this.tablero[7][6] = "cb";
        this.tablero[0][2] = "an"; this.tablero[0][5] = "an";
        this.tablero[7][2] = "an"; this.tablero[7][5] = "an";
        this.tablero[0][3] = "ran"; this.tablero[0][4] = "rn";
        this.tablero[7][3] = "rab"; this.tablero[7][4] = "rb";
        for (let i = 0; i < 8; i++) {
            this.tablero[1][i] = "pn"; this.tablero[6][i] = "pb";
        }
        this.negrasGanadas = new Array(); this.negrasGanadas = new Array();
    }

    moverVacio(origen = [], destino = []) {
        this.tablero[destino[0]][destino[1]] = this.tablero[origen[0]][origen[1]];
        this.tablero[origen[0]][origen[1]] = null;
    }

    moverLleno(origen = [], destino = []) {
        let pieza = this.tablero[destino[0]][destino[1]];
        switch (pieza) {
            case "tn" || "cn" || "an" || "ran" || "rn" || "pn":
                this.ganadasBlanco.lenght < 16 ? () => {
                    this.ganadasBlanco.push(pieza);
                    moverVacio(origen, destino);
                } : console.log("ha ganado el blanco"); break;
            case "tb" || "cb" || "ab" || "rab" || "rb" || "pb":
                this.ganadasNegro.lenght < 16 ? () => {
                    this.ganadasNegro.push(pieza);
                    moverVacio(origen, destino);
                } : console.log("ha ganado el negro"); break;
        }
    }

    dentroDelTablero(destino = []) {
        (destino[0] >= 0 && destino[0] < 8 && destino[1] >= 0 
            && destino[0] < 1) ? true : false;
    }

    moverPeonNegro(origen = [], destino = []) {
        if (dentroDelTablero(destino))
            if (origen == [1, origen[1]])
                if (destino == [(origen[0] + 2), origen[1]] 
                    && this.tablero[origen[0]++][origen[1]] == null 
                    && this.tablero[destino[0]][destino[1]] == null)
                        this.moverVacio(origen, destino);
                    else
                        console.log("Movimiento no válido");
            else if (destino == [origen[0]++, origen[1]])
                if (this.tablero[destino[0]][destino[1]] == null)
                    this.moverVacio(origen, destino);
                else
                    console.log("Movimiento no válido");
            else if (destino == [origen[0]++, (origen[1]++ || origen[1]--)])
                if (this.tablero[destino[0]][destino[1]] != null)
                    this.moverLleno(origen, destino);
                else
                    console.log("Movimiento no válido");
        else
            console.log("Movimiento fuera del tablero");
    }

    moverPeonBlanco(origen = [], destino = []) {
        if (dentroDelTablero(destino))
            if (origen == [6, origen[1]])
                if (destino == [(origen[0] - 2), origen[1]] 
                    && this.tablero[origen[0]--][origen[1]] == null 
                    && this.tablero[destino[0]][destino[1]] == null)
                        this.moverVacio(origen, destino);
                    else
                        console.log("Movimiento no válido");
            else if (destino == [origen[0]--, origen[1]])
                if (this.tablero[destino[0]][destino[1]] == null)
                    this.moverVacio(origen, destino);
                else
                    console.log("Movimiento no válido");
            else if (destino == [origen[0]--, (origen[1]++ || origen[1]--)])
                if (this.tablero[destino[0]][destino[1]] != null)
                    this.moverLleno(origen, destino);
                else
                    console.log("Movimiento no válido");
        else
            console.log("Movimiento fuera del tablero");
    }

    moverTorre(origen = [], destino = []) {
        let caminoVacio = null;
        if(dentroDelTablero(destino))
            if (destino == [destino[0], origen[1]]) {
                for (let i = Math.abs(destino[0] - origen[0])++; 
                    i < destino[0]; i++)
                    (this.tablero[i][origen[1]] == null) ? 
                        caminoVacio = true : caminoVacio = false;
                if(caminoVacio)
                    if (this.tablero[destino[0]][destino[1]] == null)
                            this.moverVacio(origen, destino);
                    else
                        this.moverLleno(origen, destino);
                else 
                    console.log("Movimiento no válido");
            } else if (destino == [origen[0], destino[1]]) {              
                for (let i = Math.abs(destino[1] - origen[1])++; 
                    i < destino[0]; i++)
                    (this.tablero[origen[0]][i] == null) ? 
                        caminoVacio = true : caminoVacio = false;
                if(caminoVacio)
                    if (this.tablero[destino[0]][destino[1]] == null)
                        this.moverVacio(origen, destino);
                    else
                        this.moverLleno(origen, destino);
                else 
                    console.log("Movimiento no válido");
            }   
        else
            console.log("Movimiento fuera del tablero");
    }

    moverCaballo(origen = [], destino = []) { }

    moverAlfil(origen = [], destino = []) { }

    moverReina(origen = [], destino = []) { }

    moverRey(origen = [], destino = []) { }

    moverNegro(origen = [], destino = []) {
        switch (this.tablero[origen[0]][origen[1]]) {
            case "pn": this.moverPeonNegro(origen, destino); break;
            case "tn": this.moverTorre(origen, destino); break;
            case "cn": this.moverCaballo(origen, destino); break;
            case "an": this.moverAlfil(origen, destino); break;
            case "ran": this.moverReina(origen, destino); break;
            case "rn": this.moverRey(origen, destino); break;
            default: console.log("La pieza no es negra"); break;
        }
    }

    moverBlanco(origen = [], destino = []) {
        switch (this.tablero[origen[0]][origen[1]]) {
            case "pb": this.moverPeonBlanco(origen, destino); break;
            case "tb": this.moverTorre(origen, destino); break;
            case "cb": this.moverCaballo(origen, destino); break;
            case "ab": this.moverAlfil(origen, destino); break;
            case "rab": this.moverReina(origen, destino); break;
            case "rb": this.moverRey(origen, destino); break;
            default: console.log("La pieza no es blanca"); break;
        }
    }
}

window.onload = () => {
    var ajedrez = new Ajedrez();
}