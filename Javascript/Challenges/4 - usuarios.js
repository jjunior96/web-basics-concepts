const usuarios = [
  { nome: 'Junior', tecnologias: ['HTML', 'CSS'] },
  { nome: 'Jasmine', tecnologias: ['Javascript', 'CSS'] },
  { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] },
  { nome: 'Marcos', tecnologias: ['React', 'CSS'] },
]

// Imprime os usuarios e suas tecnologias
for (let usuario of usuarios) {
  console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`);
}


// Busca por tecnologia
function checaSeUsuarioUsaCSS(usuario) {
  for (let tecnologia of usuario.tecnologias) {
    if (tecnologia == 'CSS') return true
  }

  return false
}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

  if(usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
  }
}
