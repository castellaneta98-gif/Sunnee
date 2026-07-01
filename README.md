# Sunnee

## Descrizione

Sunnee è un progetto TypeScript che modella un brand di beachwear sostenibile (prodotti realizzati con materiali riciclati). Il codice dimostra l'uso di interfacce e classi per rappresentare `Cliente`, `Prodotto` e `ProcessoProduzione` e include esempi di utilizzo.

## Prerequisiti

- Node.js (consigliato) o almeno TypeScript installato.
- Per compilare localmente: `npm` (opzionale) oppure usare `npx tsc`.

## Compilazione e avvio

Compilare il progetto (usa `tsconfig.json` presente nella root):

```bash
npx tsc
```

Aprire `index.html` nel browser. Su Windows:

```powershell
start index.html
```

Su macOS:

```bash
open index.html
```

Su Linux:

```bash
xdg-open index.html
```

In alternativa, avviare un server statico dalla root del progetto (utile per moduli ES):

```bash
npx http-server -c-1
```

## Struttura del progetto

```
index.html
tsconfig.json
assets/
src/
  demo.ts
  main.ts
  domain/
    Cliente.ts
    ProcessoProduzione.ts
    Prodotto.ts
  types/
    ICliente.ts
    IProcessoProduzione.ts
    IProdotto.ts
```

## Esempio rapido

Esempio di utilizzo (estratto dalle classi):

```typescript
const cliente = new Cliente('Giuseppe', 'Castellaneta', 'email@example.com', 'bonifico');
const maglietta = new Prodotto('Maglietta', 1, 'M', 'Blu', 'In produzione');
const processo = new ProcessoProduzione('Stampe', 'Stampa ecologica su tessuti sostenibili');
processo.aggiungiProdotto(maglietta);
cliente.ordinareProdotto(maglietta);
maglietta.assegnaCliente(cliente);
```

## Deployment

Questo progetto è pensato per essere eseguito localmente o pubblicato come sito statico; può essere adattato a CodePen o a qualsiasi hosting statico.

## Autore

**Giuseppe Castellaneta** - [@castellaneta98-gif](https://github.com/castellaneta98-gif)
