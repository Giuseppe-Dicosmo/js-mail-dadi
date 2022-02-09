// L'utente inserisce la sua email
let email = prompt('Inserisci la tua email');
console.log(email);


// Lista di email
const iscritti = [
  'giuseppedicosmo530@gmail.com',
  'mariaricco12@gmail.com',
  'francescolupo@libero.it',
  'tizio20@Outlook.com'
]
console.log(iscritti);

// Cerca le email.
let cercaEmail = false

// Separa le email.
for (let i = 0; i < iscritti.length; i++){
  console.log(i);

  let iscrizioni = iscritti[i];

  if (email == iscrizioni) {
    cercaEmail = true
  }

}

// Risposta del software.
if (cercaEmail) {
  alert('Bentornato')
} else {
  alert('Iscriviti')
}


// GIOCO DEI DADI
// Dado dell'utente.
let dadoUtente = Math.floor(Math.random() * (7 - 1) + 1);
console.log(dadoUtente);

// // L'utente inserisce un numero
// let dadoUtente = parseInt(prompt('Inserisci un numero da 1 a 6'));
// console.log(dadoUtente);

// //Se l'utente sbaglia.
// if (isNaN(dadoUtente) || dadoUtente >= 7) {
//   alert('Errore')
//   dadoUtente = NaN
//   console.log(dadoUtente)
// }

// Dado del bot.
let dadobot = Math.floor(Math.random() * (7 - 1) + 1);
console.log(dadobot);

if (dadoUtente > dadobot) {
  alert('Bravo, hai vinto')
} else if (dadoUtente < dadobot) {
  alert('Mi dispiace, hai perso')
} else if (dadoUtente == dadobot) {
  alert('Ritenta, sarai più fortunato')
}













