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
