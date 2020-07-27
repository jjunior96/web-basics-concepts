/* This - Objeto
**
** Sempre que falamos sobre "this", referece a objetos em Javascript
** This refere-se ao objeto onde se encontra 
** Exemplos abaixo.
**
*/

function calculaMedia () {
  return (this.notas[0] + this.notas[1]) / 2;
}

const aluno1 = {
  name: "Junior",
  notas: [9, 10],

  media: calculaMedia

  /* Caso a media fosse calculada dentro do objeto "aluno1":
  ** media: calculaMedia() {
  **   return (this.notas[0] + this.notas[1]) / 2;
  ** }
  */
}

const aluno2 = {
  name: "Jose",
  notas: [8, 7],

  media: calculaMedia
}

// Saidas 
console.log(aluno1.name);
console.log(aluno1.media());

console.log(aluno2.name);
console.log(aluno2.media());


// Construtor ===============================

// ...::: Forma de criar um objeto SEM um construtor :::...
function criarAluno(name, n1, n2) {
  
  // As "{}" do return, é como se ja tivesse criando um objeto
  return {
    name: name,
    nota1: n1,
    nota2: n2,

    media: function () {
      return (this.nota1 + this.nota2) / 2;
    }
  }
}

// Array de objetos 
const turma = [
  criarAluno("Junior", 9, 8),
  criarAluno("Jose", 7, 6),
  criarAluno("Marcos", 4, 5),
]

// ...::: Forma de criar um objeto COM construtor :::...
function aluno (name, n1, n2) {
  // Dessa forma, criamos o modelo do objeto aluno, mas nao criamos ainda
  // Para criar, precisamos utilizar o construtor, "new aluno"
  this.name = name;
  this.nota1 = n1;
  this.nota2 = n2;

  this.media = function () {
    return (this.nota1 + this.nota2) / 2;
  }
}

// Utilizamos o construtor para criar o objeto
const primeiroAluno = new aluno("Junior", 8, 9);