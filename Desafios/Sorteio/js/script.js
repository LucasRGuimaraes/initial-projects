var participantes = []

function registrarPessoa() {

    var name = document.getElementById("name").value
    var number = document.getElementById("number").value
    
    if(validadorRegistro(name, number)){
        var pessoa = {
            nome: name,
            numero: number
        }
        participantes.push(pessoa)
    }
}


function validadorRegistro(name, number) {
    if (name && number) {
        if (participantes.find(item => item.numero === number)) {
            let error = "<p style='color: red'>Já existe um participante com este número. Por favor escolha outro.</p>"
            document.getElementById("campoNome").innerHTML += error
            document.getElementById("campoNumero").innerHTML += error
            return false
        } else {
            return true
        }
    } else {
        alert("Por favor confira se ambos os campos estão preenchidos.")
        return false
    }
}

function sortear() {

    let ganhador = Math.floor(Math.random() * participantes.length)
    let resultado = document.getElementById("resultado")

    resultado.innerHTML = `${participantes[ganhador].nome}, com o numero: ${participantes[ganhador].numero}`
}