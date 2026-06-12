import { Cliente } from './domain/Cliente.js';
import { Prodotto } from './domain/Prodotto.js';
import { ProcessoProduzione } from './domain/ProcessoProduzione.js';

// Array di clienti
const clienti: Cliente[] = [
    new Cliente("Giuseppe", "Lupo", "giuseppe.lupo@example.com", "bonifico"),
    new Cliente("Maria", "Rossi", "maria.rossi@example.com", "carta di credito"),
    new Cliente("Luca", "Bianchi", "luca.bianchi@example.com", "paypal"),
];
const cliente1 = clienti[0]!;
const cliente2 = clienti[1]!;
const cliente3 = clienti[2]!;

// Array di prodotti
const prodotti: Prodotto[] = [
    new Prodotto("Magliatta", 1, "M", "Blu", "In produzione"),
    new Prodotto("Pantaloncini", 2, "L", "Nero", "In produzione"),
    new Prodotto("Cappello", 3, "S", "Rosso", "In produzione"),
];
const prodotto1 = prodotti[0]!;
const prodotto2 = prodotti[1]!;
const prodotto3 = prodotti[2]!;

// Array di processi
const processi: ProcessoProduzione[] = [
    new ProcessoProduzione(
        "Stampe su tessuti riciclati",
        "I prodotti vengono stampati con disegni personalizzati su tessuti riciclati, utilizzando tecniche di stampa ecologiche per ridurre l'impatto ambientale"
    ),
    new ProcessoProduzione(
        "Cucitura di cappelli",
        "I cappelli vengono cuciti a mano con materiali sostenibili, come cotone organico o tessuti riciclati, per creare accessori alla moda e rispettosi dell'ambiente"
    ),
];
const processo1 = processi[0]!;
const processo2 = processi[1]!;

// Mappatura: processo -> prodotti da aggiungere
const assegnazioni: Array<{ processo: ProcessoProduzione; prodotti: Prodotto[] }> = [
    { processo: processo1, prodotti: [prodotto1, prodotto2] },
    { processo: processo2, prodotti: [prodotto3] },
];

// Mappatura: cliente -> prodotto da ordinare
const ordini: Array<{ cliente: Cliente; prodotto: Prodotto }> = [
    { cliente: cliente1, prodotto: prodotto1 },
    { cliente: cliente2, prodotto: prodotto2 },
    { cliente: cliente3, prodotto: prodotto3 },
];

// Esecuzione della demo
document.addEventListener("DOMContentLoaded", () => {
    console.log("Il documento è stato caricato e il DOM è pronto.");

    // Prima: mostra stato iniziale
    console.log("\n=== Stato iniziale prodotti ===");
    prodotti.forEach((prod, index) => {
        console.log(`Prodotto ${index + 1} prima dell'aggiunta al processo di produzione:`, prod);
    });

    // Aggiungi prodotti ai processi
    console.log("\n=== Aggiunta prodotti ai processi ===");
    assegnazioni.forEach(({ processo, prodotti: prodottiDaAggiungere }) => {
        prodottiDaAggiungere.forEach((prod) => {
            processo.aggiungiProdotto(prod);
            console.log(`Il prodotto ${prod.tipo} è stato aggiunto al processo di produzione ${processo.nomeDelProcesso}.`);
        });
    });

    // Dopo: mostra stato finale
    console.log("\n=== Stato finale prodotti ===");
    prodotti.forEach((prod, index) => {
        console.log(`Prodotto ${index + 1} dopo l'aggiunta al processo di produzione:`, prod);
    });

    // Esegui ordini
    console.log("\n=== Ordini ===");
    ordini.forEach(({ cliente, prodotto }) => {
        const ordinamentoRiuscito = cliente.ordinareProdotto(prodotto);
        if (ordinamentoRiuscito) {
            console.log(`Il cliente ${cliente.nome} ${cliente.cognome} ha ordinato il prodotto ${prodotto.tipo} (ID: ${prodotto.ID}).`);
            prodotto.assegnaCliente(cliente);
            console.log(`Il prodotto ${prodotto.tipo} (ID: ${prodotto.ID}) è stato assegnato al cliente ${cliente.nome} ${cliente.cognome}.`);
        } else {
            console.log(`Il prodotto ${prodotto.tipo} (ID: ${prodotto.ID}) non è disponibile per l'ordine da parte di ${cliente.nome}.`);
        }
    });
});

export { Cliente, Prodotto, ProcessoProduzione };
