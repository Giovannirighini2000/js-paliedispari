// ESERCIZIO PAROLE PALIDROME
// CHIEDI UNA PAROLA ALL'UTENTE
let chiediParola = prompt('inserisci una parola');

// INVOCAZIONE LA FUNZIONE
const evoPalidrome = palidrome(chiediParola);

// STAMPO SE E TRUE E FALSO
console.log(palidrome(chiediParola));

// FUNZIONE    
function palidrome(parola) {
    // RIDICHIARO LA VARIABILE PER OTTENERE LA SUA PROPRIETA length
    let parolaLeng = parola.length;

    // PRENDI LE PRIME DUE LETTERE
    // SUBSTRING estrae i caratteri in base all'indece inziale e uno possibile finale 
    let inizio = parola.substring(0, Math.floor(parolaLeng / 2)).toLowerCase();

    // PRENDI LE ULTIME DUE LETTERE
    let fine = parola.substring(parolaLeng - Math.floor(parolaLeng / 2)).toLowerCase();

    // STAMPIAMO LE LETTERE PRESE
    console.log(inizio, fine);
    // DICHIARO UNA VARIABILE , ANDIAMO A INVERTIRE L'ORDINE DELLE PAROLE FINALI: 
    // SPLIT: TRASFORMIAMO LE LETTERE IN UN ARRAY IN CUI OGNI CARRATTERE E UN ELEMENTO 
    // REVERSE: PER INVERTIRE L'ORDINE DELL'ARRAY E LO RESTITUISE ALLA STESSA ARRAY , 
    // JOIN:CREA E RESTITUISCE DAGLI ELEMENTI DIVISI PRIMA
    let inverti = fine.split('').reverse().join('');
    // VERIFICHIAMO LA CORRISPONDEZA DELL'INIZIO E DELLA FINE COSI DA OTTENERE SE  E PALIDROME
    return (inizio === inverti)
}


// ESERCIZIO PAROLE PARI O DISPARI 
// USIAMO IL CICLO DO WHILE PER STABILIRE COSA SCEGLIE UTENTE SE PARI O DISPARIS
let utenteSceltaPariDispari

do {
    utenteSceltaPariDispari = prompt('Scrivi pari o dispari')
} while (utenteSceltaPariDispari !== 'pari' && utenteSceltaPariDispari !== 'dispari')
console.log(utenteSceltaPariDispari)

// USANDO IL CICLO WHILE E UN PROMPT CHIEDO UN NUMERO DA 1 A 5
let utenteSeglieNum = parseInt(prompt('Scegli un numero da uno 1 a 5 '))
console.log(utenteSeglieNum)

while (isNaN(utenteSeglieNum) || utenteSeglieNum === 0 || utenteSeglieNum > 5) {
    utenteSeglieNum = parseInt(prompt('Scegli un numero da uno 1 a 5 '))
}

// INVOCO LA FUNZIONE 
let generatore = generatoreRandom(Number)
console.log(generatore)

// INVOCO LA FUNZIONE
let sommaTotale = sommaNumeriUtentePc(generatore, utenteSeglieNum)
console.log(sommaTotale)


// STABILISCO SE L'UTENTE VINCE O PERDE IN BASE ALLA SCELTA
if (sommaTotale % 2 === 0 && utenteSceltaPariDispari === 'pari') {
    console.log('HAI VINTO')
} else if (sommaTotale % 2 === 1 && utenteSceltaPariDispari === 'dispari') {
    console.log('HAI VINTO')
} else {
    console.log('HAI PERSO')
}

// GENERO CON LA FUNZIONE IL NUMERO RANDOM
function generatoreRandom(x) {
    const gene = Math.floor(Math.random() * 5) + 1;
    return gene
}

// GENERO  LA SOMMA CON LA FUNZIONE
function sommaNumeriUtentePc(numeroscelto, numerorandom) {
    const somma = numeroscelto + numerorandom
    return somma
}




