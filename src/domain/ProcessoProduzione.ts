import type { IProcessoProduzione } from '../types/IProcessoProduzione.js';
import type { IProdotto } from '../types/IProdotto.js';

export class ProcessoProduzione implements IProcessoProduzione {
    nomeDelProcesso: string;
    descrizione: string;
    prodottiInProduzione: IProdotto[];

    constructor(nomeDelProcesso: string, descrizione: string) {
        this.nomeDelProcesso = nomeDelProcesso;
        this.descrizione = descrizione;
        this.prodottiInProduzione = [];
    }

    aggiungiProdotto(prodotto: IProdotto): void {
        this.prodottiInProduzione.push(prodotto);
        prodotto.stato = "Disponibile";
    }
}
