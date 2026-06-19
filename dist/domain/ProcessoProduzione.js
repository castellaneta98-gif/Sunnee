export class ProcessoProduzione {
    nomeDelProcesso;
    descrizione;
    prodottiInProduzione;
    constructor(nomeDelProcesso, descrizione) {
        this.nomeDelProcesso = nomeDelProcesso;
        this.descrizione = descrizione;
        this.prodottiInProduzione = [];
    }
    aggiungiProdotto(prodotto) {
        this.prodottiInProduzione.push(prodotto);
        prodotto.stato = "Disponibile";
    }
}
