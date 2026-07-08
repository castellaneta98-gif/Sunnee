export class Cliente {
    nome;
    cognome;
    email;
    metododiPagamento;
    constructor(nome, cognome, email, metododiPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metododiPagamento = metododiPagamento;
    }
    ordinareProdotto(prodotto) {
        if (prodotto.stato === "Disponibile") {
            prodotto.stato = "Esaurito";
            return true;
        }
        return false;
    }
}
