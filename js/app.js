// ESERCIZIO PAROLE PALIDROME
// CHIEDI UNA PAROLA ALL'UTENTE
let chiediParola = prompt('inserisci una parola');

// INVOCAZIONE LA FUNZIONE
const evoPalidrome = palidrome(chiediParola) ;

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