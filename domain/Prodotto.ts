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

    assegnaCliente(cliente: ICliente): void {
        this.stato = "ordinato";
        console.log(`Il prodotto ${this.tipo} (ID: ${this.ID}) è stato assegnato al cliente ${cliente.nome} ${cliente.cognome}.`);
    }
}
