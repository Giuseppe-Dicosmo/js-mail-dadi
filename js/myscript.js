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
