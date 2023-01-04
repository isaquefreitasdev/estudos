function jogadores(nome, position) {
    return { nome, position }
}
let players = [jogadores('Isaque', 'atacante'),
jogadores('Neymar', 'Ponta esquerda'),
jogadores('Cristiano Ronaldo', 'Ponta esquerda'),
jogadores('Messi', 'atacante')]


function fitroPE(jogadores){
    return jogadores.nome + ' é ' + jogadores.position
}


let pontasesq = players.map(fitroPE);
console.log(pontasesq)