// Calculo de IMC

const name = "Carlos";
const weight = 84;
const height = 1.8;

const imc = weight / (height * height);

if (imc >= 30) {
  console.log(
    name + " tem o IMC de: " + imc.toFixed(2) + ", portanto esta acima do peso"
  );
}

if (imc < 30) {
  console.log(
    name +
      " tem o IMC de: " +
      imc.toFixed(2) +
      ", portanto não esta acima do peso"
  );
}

