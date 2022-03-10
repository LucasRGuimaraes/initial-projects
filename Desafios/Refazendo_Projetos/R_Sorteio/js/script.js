let participantes = []

function validarRegistro() {
    let errorNumber = document.getElementById("errorNumber")
    const name = validarName()
    const number = validarNumber()

    if(!number){
        return false
    }

    const existe = participantes.find(item => item.number === number)

    if (existe) {
        let errorNumeroExistente = "<p style='font-size: 10px'>*ESCOLHA OUTRO NÚMERO*</p>"
        errorNumber.innerHTML = errorNumeroExistente
        errorNumber.style.opacity = "100%"
        return false
    }

    if(!name){
        return false
    }
    
    return true
}

function validarName() {
    let name = document.getElementById('name').value
    let errorName = document.getElementById("errorName")

    if (!name) {
        errorName.style.opacity = "100%"
        return false
    }
    errorName.style.opacity = "0%"
    return true
}

function validarNumber() {
    let number = document.getElementById('number').value
    let errorNumber = document.getElementById("errorNumber")

    if (!number) {
        errorNumber.style.opacity = "100%"
        return false
    }
    errorNumber.style.opacity = "0%"
    return number
}

function registrar() {
    let name = document.getElementById('name').value
    let number = document.getElementById('number').value
    const registro = validarRegistro(name, number)

    if (registro) {
        participantes.push({ name: name, number: number })
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    }
}

function sortear() {
    let ganhador = Math.floor(Math.random() * participantes.length)
    let resultado = document.getElementById("resultado")
    let nomeGanhador = participantes[ganhador].name
    let apresentacaoGanhador = nomeGanhador.charAt(0).toUpperCase() + nomeGanhador.slice(1)

    resultado.innerHTML = `<p>O ganhador do sorteio foi: ${apresentacaoGanhador}, usando o número: ${participantes[ganhador].number}</p>`
}