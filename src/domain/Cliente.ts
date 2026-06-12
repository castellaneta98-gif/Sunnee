import type { ICliente } from '../types/ICliente.js';
import type { IProdotto } from '../types/IProdotto.js';

export class Cliente implements ICliente {
    nome: string;
    cognome: string;
    email: string;
    metododiPagamento: string;

    constructor(nome: string, cognome: string, email: string, metododiPagamento: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metododiPagamento = metododiPagamento;
    }

    ordinareProdotto(prodotto: IProdotto): boolean {
        if (prodotto.stato === "Disponibile") {
            prodotto.stato = "Esaurito";
            return true;
        }
        return false;
    }
}
