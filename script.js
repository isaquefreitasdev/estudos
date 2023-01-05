let dataPerson = {
    nome:'Isaque',
    idade:17,
    cpf:394782038
}

let jobs = {
    one:'programmer',
    two:'editor',
    three:'social media'
}



let every = {...dataPerson,...jobs}



console.log(every);