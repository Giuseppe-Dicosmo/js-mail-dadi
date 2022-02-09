// Lista di email
const iscritti = [
  'giuseppedicosmo530@gmail.com',
  'idaricco12@gmail.com',
  'francescolupo@libero.it',
  'tizio20@Outlook.com'
]
console.log(iscritti);

// let eMail2 = 'giuseppedicosmo530@gmail.com'
// console.log(eMail2)

// L'utente inserisce la sua email
let eMail = prompt('Esci la tua email');
console.log(eMail);

if (eMail == iscritti.length) {
  alert('ok')
} else {
  alert('Sbagliato')
}