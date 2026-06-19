export class Prodotto {
    tipo;
    ID;
    taglia;
    colore;
    stato;
    constructor(tipo, ID, taglia, colore, stato) {
        this.tipo = tipo;
        this.ID = ID;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = stato;
    }
    assegnaCliente(_cliente) {
        this.stato = "ordinato";
    }
}
