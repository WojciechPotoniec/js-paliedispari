/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/
let word = prompt("Inserisci una parola");

function palindromcheck(string) {
  if (string.toLowerCase().split("").reverse().join("") === string) {
    return true;
    console.log("è palindroma");
  }
}
let risultato = palindromcheck(word.toLowerCase());

if (risultato) {
  console.log("la parola è palindroma");
} else console.log("la parola non è palindroma");



/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/
let userchoice = prompt("Scegli tra pari o dispari");

while(userchoice !== 'pari' && userchoice !== 'dispari'){
    userchoice = prompt("Devi scegliere tra pari o dispari");
}
console.log("scelta parola utente", userchoice);

let usernumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
while(usernumber < 1 || usernumber > 5 ){
    usernumber = parseInt(prompt("Devi inserire un numero compreso tra 1 o 5"));
}
console.log("scelta numero", usernumber);
let pcnumber = getRndInteger(1, 5);
console.log("scelta pc", pcnumber);
let sum = usernumber + pcnumber;
console.log("somma", sum);

function EvenOrOdd(number) {
  number = sum;
  if (sum % 2 === 0) {
    return "pari";
  }
  return "dispari";
}
let result = EvenOrOdd(sum);
console.log("somma", result);

if(userchoice === result){
    console.log('Hai vinto');
}else console.log('Hai perso');