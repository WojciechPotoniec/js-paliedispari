/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/
let word = prompt('Inserisci una parola');

function palindromcheck(string){
    if(string.toLowerCase().split('').reverse().join('') === string){
        return true
        console.log('è palindroma');
    }
}
let risultato = palindromcheck(word.toLowerCase());

if(risultato){
    console.log('la parola è palindroma');
}
else console.log('la parola non è palindroma');



/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/
