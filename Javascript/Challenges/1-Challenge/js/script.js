// Carne - 400g por pessoa  +6 horas - 650g
// Cerveja - 1200ml por pessoa  +6 horas - 2000ml
// Refri/agua - 1000ml por pessoa  +6 horas - 1500ml

// Crianças valem 0.5 pessoas


function calculaChurrasco() {
  // Inputs 
  let inputAdultos = document.getElementById("adultos");
  let inputCriancas = document.getElementById("criancas");
  let inputDuracao = document.getElementById("duracao");

  // Onde sera inserido o resultado
  let resultado = document.getElementById("result-wrapper");

  // Carne
  let quantidadeCarneAdultos = (inputAdultos.value * carnePorPessoa(inputDuracao.value));
  let quantidadeCarneCriancas = inputCriancas.value * (carnePorPessoa(inputDuracao.value) / 2);
  let quantidadeTotalCarne = quantidadeCarneAdultos + quantidadeCarneCriancas;

  // Cerveja
  let quantidadeTotalCerveja = inputAdultos.value * cervejaPorPessoa(inputDuracao);

  // Refri/Agua 
  let quantidadeTotalRefriAgua = (inputAdultos.value * aguaPorPessoa(inputDuracao)) + (inputCriancas.value * aguaPorPessoa(inputDuracao)/2);

  // Insere no elemento com id #result-wrapper
  resultado.innerHTML = `<p>${(quantidadeTotalCarne).toFixed(3)}Kg de carne</p>`;
  resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalCerveja / 0.350)} Latas 350ml de cerveja</p>`;
  resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalRefriAgua) / 2} Garrafas de 2l de água</p>`;

  console.log(quantidadeTotalCerveja);

}

function carnePorPessoa(duracao) {
  let carne = 0.4;

  if (duracao >= 6 ) {
    carne =  0.650;
  } 
  
  return carne;
}

function cervejaPorPessoa(duracao) {
  let cerveja = 1.2;

  if (duracao >= 6 ) {
    cerveja =  2;
  } 
  
  return cerveja;
}

function aguaPorPessoa(duracao) {
  let agua = 1;

  if (duracao >= 6 ) {
    agua =  1.5;
  } 
  
  return agua;
}