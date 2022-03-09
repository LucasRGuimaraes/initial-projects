// Carne - 400 gr por pessoa                  + de 6 horas - 650 gr
// Cerveja - 1200 ml por pessoa               + de 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa     + de 6 horas - 1500 ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")
let resultado = document.getElementById("resultado")

function calcular() {
    if (validador(inputAdultos.value, inputCriancas.value, inputDuracao.value)){
        let adultos = inputAdultos.value
        let criancas = inputCriancas.value
        let duracao = inputDuracao.value

        let totalCarnes = (carnePP(duracao) * adultos) + carnePP(duracao) * (criancas / 2)
        let totalCervejas = cervejaPP(duracao) * adultos
        let totalRefrigerante = (refrigerantePP(duracao) * adultos) + (refrigerantePP(duracao) * (criancas / 2))

        resultado.innerHTML = `<p>${totalCarnes/1000} Kg de Carne</p>`
        resultado.innerHTML += `<p>${Math.ceil(totalCervejas/355)} Latas de Cerveja</p>`
        resultado.innerHTML += `<p>${Math.ceil(totalRefrigerante/2000)} Garrafas de Refrigerantes</p>`
    }
}

function carnePP (duracao){
    if(duracao < 6){
        return 400
    } else {
        return 650
    }
}

function cervejaPP (duracao){
    if(duracao < 6){
        return 1200
    } else {
        return 2000
    }
}

function refrigerantePP (duracao){
    if(duracao < 6){
        return 1000
    } else {
        return 1500
    }
}

function validador(adultos, criancas, duracao) {
    if ((adultos != null && adultos > 0) && (criancas != null && criancas > 0) && (duracao != null && duracao > 0)) {
        let error = document.getElementById("error")
        error.style = "opacity: 0%;"

        return true
    } else {
        let error = document.getElementById("error")
        error.style = "opacity: 100%;"

        return false
    }
}