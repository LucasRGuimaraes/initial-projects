
function criarAluno(name, n1, n2){
    return {
        nome: name,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 + this.nota2) / 2
        }    
    }
}

var turma = [
    criarAluno("Lucas", 10, 10),
    criarAluno("Joao", 9, 7.5),
    criarAluno("Jose", 6, 8),
    criarAluno("Matheus", 9, 7.5)
]

for(aluno of turma){
    console.log(`O aluno ${aluno.nome} teve como media ${aluno.media()}.`)
}

// -------------------------------------------------- FORMA AVANÇADA

/*
function criarAluno(name, n1, n2){

    this.nome = name,
    this.nota1 = n1,
    this.nota2 = n2,
    this.media = function(){
        return (this.nota1 + this.nota2) / 2  
    }
}

var turma = [
new criarAluno("Lucas", 10, 10),
new criarAluno("Joao", 9, 7.5),
new criarAluno("Jose", 6, 8),
new criarAluno("Matheus", 9, 7.5)
]



turma.forEach(function(elemento){
    
})
*/
