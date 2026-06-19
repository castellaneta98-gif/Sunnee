import type { IProdotto } from './IProdotto';

export interface IProcessoProduzione {
    nomeDelProcesso: string;
    descrizione: string;
    prodottiInProduzione: IProdotto[];
    aggiungiProdotto(prodotto: IProdotto): void;
}
