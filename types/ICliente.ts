import type { IProdotto } from './IProdotto.js';

export interface ICliente {
    nome: string;
    cognome: string;
    email: string;
    metododiPagamento: string;
    ordinareProdotto(prodotto: IProdotto): void;
}
