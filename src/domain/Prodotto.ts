import type { IProdotto } from '../types/IProdotto.js';
import type { ICliente } from '../types/ICliente.js';

export class Prodotto implements IProdotto {
    tipo: string;
    ID: number;
    taglia: string;
    colore: string;
    stato: string;

    constructor(tipo: string, ID: number, taglia: string, colore: string, stato: string) {
        this.tipo = tipo;
        this.ID = ID;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = stato;
    }

    assegnaCliente(_cliente: ICliente): void {
        this.stato = "ordinato";
    }
}
