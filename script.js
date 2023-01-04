function jogadores(nome, position) {
    return { nome, position }
}
let players = [jogadores('Isaque', 'atacante'),
jogadores('Neymar', 'Ponta esquerda'),
jogadores('Cristiano Ronaldo', 'Ponta esquerda'),
jogadores('Messi', 'atacante')]


function fitroPE(jogador){
    return jogador.position == 'Ponta esquerda'
}


let pontasesq = players.filter(fitroPE);
console.log(pontasesq)