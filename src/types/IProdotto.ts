import type { ICliente } from './ICliente.js';

export interface IProdotto {
    tipo: string;
    ID: number;
    taglia: string;
    colore: string;
    stato: string;
    assegnaCliente(cliente: ICliente): void;
}
