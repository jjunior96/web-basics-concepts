// Objetos e Arrays

const usuario = {
  nome: 'Junior',

  empresa: {
    nome: 'Rocketseat',
    cor: '7159c1',
    foco: 'Programação',
    endereco: {
      rua: 'Rua Guilherme Gembala',
      numero: 260,
    }
  }
}

console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}`);


// =================================
const programador = {
  nome: 'Junior',
  idade: 23,
  tecnologias: [{nome: 'C++', especialidade: 'Desktop'}, {nome: 'Python', especialidade: 'Data Science'}, {nome: 'Javscript', especialidade: 'Web/Mobile'}]
}

console.log(`O usuario ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`);