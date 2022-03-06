/*
var alunos = ["Igor", "Jose", "Marcos", "Mariana", "Joana", "Leo"]
var contador = 0

while (contador <= alunos.length) {
    console.log(alunos[contador])
    contador++
}
*/

// Nome do aluno  - nota1 - nota2 - média - aprovado - reprovado

// var alunos = ["Igor", "José", "Maria"]
// var notasA = [7.0, 6.5, 9.5]
// var notasB = [8.0, 7.0, 8.5]


// function media(n1, n2) {
//     return (n1 + n2) / 2
// }

// function passou(media){
//     if(media >= 7){
//         return "APROVADO"
//     } else {
//         return "REPROVADO"
//     }
// }

// for (var index in alunos) {
//     var nota1 = notasA[index]
//     var nota2 = notasB[index]
//     var m = media(nota1, nota2)

//     console.log(`Aluno: ${alunos[index]} tirou: ${nota1} na primeira nota e ${nota2} na segunda.`)
//     console.log("Logo, sua media foi: " + m + " - " + passou(m))
// }

function criarAluno(name, n1, n2){
    return {
        nome: name,
        nota1: n1,
        nota2: n2,
        media: function media() {
            return (this.nota1 + this.nota2) / 2
        },
        resultado: function resultado() {
            if(this.media() >= 7){
                return "APROVADO"
            } else {
                return "REPROVADO"
            }
        }
    }
}

var turma = [
    criarAluno("Lucas", 10, 10),
    criarAluno("Joao", 9, 7.5),
    criarAluno("Jose", 6, 8),
    criarAluno("Matheus", 9, 7.5)
]

turma.forEach(function(aluno){
    console.log(`O aluno ${aluno.nome} teve como media ${aluno.media()}. ${aluno.resultado()}`)
})
