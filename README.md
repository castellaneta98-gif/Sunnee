# Sunnee 

## Descrizione

Il progetto rappresenta un sistema in TypeScript che modella la struttura operativa di un brand di beachwear in materiali riciclati. Il sistema si concentra sulle interazioni tra clienti, prodotti beachwear e processi di produzione sostenibile. Il codice è strutturato utilizzando interfacce e classi che rappresentano i vari componenti del sistema.

Sunnee è un brand immaginario che si dedica alla produzione di costumi, magliette e cappelli fatti con plastica riciclata, contribuendo a ridurre l'inquinamento ambientale.


## Architettura

### Interfacce Principali

```typescript
interface IProdotto {
    tipo: string;
    ID: number;
    taglia: string;
    colore: string;
    stato: string;
    assegnaCliente(cliente: ICliente): void;
}

interface ICliente {
    nome: string;
    cognome: string;
    email: string;
    metododiPagamento: string;
    ordinareProdotto(prodotto: IProdotto): void;
}

interface IProcessoProduzione {
    nomeDelProcesso: string;
    descrizione: string;
    prodottiInProduzione: IProdotto[];
    aggiungiProdotto(prodotto: IProdotto): void;
}
```

### Classi Principali

- `Prodotto`: Articolo con stato e assegnazione
- `Cliente`: Dati cliente e operazioni di ordine
- `ProcessoProduzione`: Traccia prodotti in stadi produttivi

## Uso

### Compilazione

```bash
tsc                     # Compila con tsconfig.json
tsc --ignoreConfig      # Ignora configurazione
```

### Esempio

```typescript
// Creazione cliente
const cliente = new Cliente(
    "Giuseppe", 
    "Castellaneta", 
    "email@example.com", 
    "bonifico"
);

// Creazione prodotto
const maglietta = new Prodotto(
    "Maglietta", 
    1, 
    "M", 
    "Blu", 
    "In produzione"
);

// Aggiunta a processo di produzione
const processo = new ProcessoProduzione(
    "Stampe su tessuti riciclati",
    "Stampa ecologica su tessuti sostenibili"
);
processo.aggiungiProdotto(maglietta);

// Ordine e assegnazione
cliente.ordinareProdotto(maglietta);
maglietta.assegnaCliente(cliente);
```



## Struttura Progetto

```
├── main.ts          # Logica principale
├── main.js          # Output compilato
├── index.html       # Interfaccia HTML
├── tsconfig.json    # Configurazione
└── assets/          # Risorse
```

## Deployment

Deployato su **CodePen** con ES6 modules e logging in console.

## Autore

**Giuseppe Castellaneta** - [@castellaneta98-gif](https://github.com/castellaneta98-gif)
