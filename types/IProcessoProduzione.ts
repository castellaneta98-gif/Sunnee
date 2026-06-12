import type { IProdotto } from './IProdotto.js';

export interface IProcessoProduzione {
    nomeDelProcesso: string;
    descrizione: string;
    prodottiInProduzione: IProdotto[];
    aggiungiProdotto(prodotto: IProdotto): void;
}
