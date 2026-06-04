class Prodotto {
    tipo;
    ID;
    taglia;
    colore;
    stato;
    constructor(tipo, ID, taglia, colore, stato) {
        this.tipo = tipo;
        this.ID = ID;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = stato;
    }
    assegnaCliente(cliente) {
        this.stato = "ordinato";
        console.log(`Il prodotto ${this.tipo} (ID: ${this.ID}) è stato assegnato al cliente ${cliente.nome} ${cliente.cognome}.`);
    }
}
class Cliente {
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
        if (prodotto.stato = "Disponibile") {
            prodotto.stato = "Esaurito";
            console.log(`Il cliente ${this.nome} ${this.cognome} ha ordinato il prodotto ${prodotto.tipo} (ID: ${prodotto.ID}).`);
        }
        else {
            console.log(`Il prodotto ${prodotto.tipo} (ID: ${prodotto.ID}) non è disponibile per l'ordine.`);
        }
    }
}
class ProcessoProduzione {
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
        console.log(`Il prodotto ${prodotto.tipo} è stato aggiunto al processo di produzione ${this.nomeDelProcesso}.`);
    }
}
// Esempio di utilizzo
const cliente1 = new Cliente("Giuseppe", "Lupo", "giuseppe.lupo@example.com", "bonifico");
const cliente2 = new Cliente("Maria", "Rossi", "maria.rossi@example.com", "carta di credito");
const cliente3 = new Cliente("Luca", "Bianchi", "luca.bianchi@example.com", "paypal");
const prodotto1 = new Prodotto("Magliatta", 1, "M", "Blu", "In produzione");
const prodotto2 = new Prodotto("Pantaloncini", 2, "L", "Nero", "In produzione");
const prodotto3 = new Prodotto("Cappello", 3, "S", "Rosso", "In produzione");
const processo1 = new ProcessoProduzione("Stampe su tessuti riciclati", "I prodotti vengono stampati con disegni personalizzati su tessuti riciclati, utilizzando tecniche di stampa ecologiche per ridurre l'impatto ambientale");
const processo2 = new ProcessoProduzione("Cucitura di cappelli", "I cappelli vengono cuciti a mano con materiali sostenibili, come cotone organico o tessuti riciclati, per creare accessori alla moda e rispettosi dell'ambiente");
document.addEventListener("DOMContentLoaded", () => {
    console.log("Il documento è stato caricato e il DOM è pronto.");
    console.log("Prodotto 1 prima dell'aggiunta al processo di produzione:", prodotto1);
    console.log("Prodotto 2 prima dell'aggiunta al processo di produzione:", prodotto2);
    console.log("Prodotto 3 prima dell'aggiunta al processo di produzione:", prodotto3);
    processo1.aggiungiProdotto(prodotto1);
    processo1.aggiungiProdotto(prodotto2);
    processo2.aggiungiProdotto(prodotto3);
    console.log("Prodotto 1 dopo l'aggiunta al processo di produzione:", prodotto1);
    console.log("Prodotto 2 dopo l'aggiunta al processo di produzione:", prodotto2);
    console.log("Prodotto 3 dopo l'aggiunta al processo di produzione:", prodotto3);
    cliente1.ordinareProdotto(prodotto1);
    prodotto1.assegnaCliente(cliente1);
    cliente2.ordinareProdotto(prodotto2);
    prodotto2.assegnaCliente(cliente2);
    cliente3.ordinareProdotto(prodotto3);
    prodotto3.assegnaCliente(cliente3);
    console.log("Prodotto 1 dopo l'ordine:", prodotto1);
    console.log("Prodotto 2 dopo l'ordine:", prodotto2);
    console.log("Prodotto 3 dopo l'ordine:", prodotto3);
    cliente1.ordinareProdotto(prodotto1);
    cliente2.ordinareProdotto(prodotto2);
    cliente3.ordinareProdotto(prodotto3);
    console.log("Processo di produzione 1:", processo1);
    console.log("Processo di produzione 2:", processo1);
    console.log("Processo di produzione 3:", processo2);
    console.log("Cliente 1:", cliente1);
    console.log("Cliente 2:", cliente2);
    console.log("Cliente 3:", cliente3);
});
export {};
