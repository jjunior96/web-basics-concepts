// Calculo de Aposentadoria

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contruibuicao = 35;

function verificaTempoMinimo (sexo, contruibuicao) {
  if( sexo === 'F' ) {
    if( contruibuicao >= 30 ) {
      return true;
    } 

    return false;
  }

  if( sexo === 'M' ) {
    if( contruibuicao >= 35 ) {
      return true;
    } 

    return false;
  }
}

function verificaRegra (idade, contruibuicao) {
  const tempoMinimo = idade + contruibuicao;

  if( sexo === 'F' ) {
    if( tempoMinimo >= 85 ) {
      return true;
    } 

    return false;
  }

  if( sexo === 'M' ) {
    if( tempoMinimo >= 95 ) {
      return true;
    } 

    return false;
  }
}

function verificaAposentadoria (nomeParametro, idadeParametro, contruibuicaoParametro, sexoParametro) {
  const tempoMinimo = verificaTempoMinimo(sexoParametro, contruibuicaoParametro);
  const regraMinima = verificaRegra(idadeParametro, contruibuicaoParametro);

  console.log(tempoMinimo);
  console.log(regraMinima);

  if(tempoMinimo || regraMinima) {
    console.log(nomeParametro + ", voce pode se aposentar!");
    
    return;
  } else {
    console.log(nomeParametro + ", voce ainda não pode se aposentar.");
    
  }
  return console.log(sexoParametro, contruibuicaoParametro, idadeParametro, sexoParametro);
}

verificaAposentadoria(nome, idade, contruibuicao, sexo);