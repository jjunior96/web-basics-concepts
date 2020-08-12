let cardInfo = {
  name: "Nubank",
  number: 2687,
  value: 3800,
  expirationMonth: 12,
  expirationYear: 24,
  holder: "junior alves" 
}

// No cartao que esta na frente, pego o nome do banco
const nameBank = document.getElementById("name-bank");

nameBank.innerHTML = cardInfo.name;

