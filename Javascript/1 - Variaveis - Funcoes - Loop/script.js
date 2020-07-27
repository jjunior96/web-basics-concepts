const alunos = ["Junior", "Lucas", "Igor"];
const notas1 = [8.0, 4.0, 8.5];
const notas2 = [9.0, 5.0, 6.5];

function calculaMedia (nota1, nota2) {
  return (nota1 + nota2)/2;
}

function verificaAprovado (media) {
  let status = "Reprovado";

  if (media > 7) {
    status = "Aprovado";
  }

  return status;
}

for (index in alunos ){
  let nota1 = notas1[index];
  let nota2 = notas2[index];
  let media = calculaMedia(nota1, nota2);
  let statusAluno = verificaAprovado(media);

  console.log(
    alunos[index] + " - Nota 1: " + nota1 + " - Nota 2: " + nota2 + " - " + media + " -> " + statusAluno
  );
}