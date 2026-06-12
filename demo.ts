import { Cliente } from './domain/Cliente.js';
import { Prodotto } from './domain/Prodotto.js';
import { ProcessoProduzione } from './domain/ProcessoProduzione.js';

// Esempio di utilizzo
const cliente1 = new Cliente("Giuseppe", "Lupo", "giuseppe.lupo@example.com", "bonifico");
const cliente2 = new Cliente("Maria", "Rossi", "maria.rossi@example.com", "carta di credito");
const cliente3 = new Cliente("Luca", "Bianchi", "luca.bianchi@example.com", "paypal");

const prodotto1 = new Prodotto("Magliatta", 1, "M", "Blu", "In produzione");
const prodotto2 = new Prodotto("Pantaloncini", 2, "L", "Nero", "In produzione");
const prodotto3 = new Prodotto("Cappello", 3, "S", "Rosso", "In produzione");

const processo1 = new ProcessoProduzione(
    "Stampe su tessuti riciclati",
    "I prodotti vengono stampati con disegni personalizzati su tessuti riciclati, utilizzando tecniche di stampa ecologiche per ridurre l'impatto ambientale"
);

const processo2 = new ProcessoProduzione(
    "Cucitura di cappelli",
    "I cappelli vengono cuciti a mano con materiali sostenibili, come cotone organico o tessuti riciclati, per creare accessori alla moda e rispettosi dell'ambiente"
);

// Esecuzione della demo
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
});

export { Cliente, Prodotto, ProcessoProduzione };
