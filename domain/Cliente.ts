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

    ordinareProdotto(prodotto: IProdotto): void {
        if (prodotto.stato === "Disponibile") {
            prodotto.stato = "Esaurito";
            console.log(`Il cliente ${this.nome} ${this.cognome} ha ordinato il prodotto ${prodotto.tipo} (ID: ${prodotto.ID}).`);
        } else {
            console.log(`Il prodotto ${prodotto.tipo} (ID: ${prodotto.ID}) non è disponibile per l'ordine.`);
        }
    }
}
