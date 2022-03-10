// Carne - 400 gr por pessoa                  + de 6 horas - 650 gr
// Cerveja - 1200 ml por pessoa               + de 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa     + de 6 horas - 1500 ml

// Crianças valem por 0,5

function churrascar(){
    let adultos = document.getElementById("adultos")
    let criancas = document.getElementById("criancas")
    let duracao = document.getElementById("duracao")
    let resultado = document.getElementById("resultado")
    alert(duracao.value)

    if(duracao.value < 6) {
        let qntdCarnes = (adultos.value * 400) + (criancas.value / 2) * 400
        let qntdCerveja = adultos.value * 1200
        let qntdRefrigerante = (adultos.value * 1000) + (criancas.value / 2) * 1000

        resultado.innerHTML = `<p>${qntdCarnes/1000} Kg de Carne</p>`
        resultado.innerHTML += `<p>${Math.ceil(qntdCerveja/355)} Latas de Cerveja</p>`
        resultado.innerHTML += `<p>${Math.ceil(qntdRefrigerante/1000)} Garrafas de Refrigerante</p>`
    } else {
        let qntdCarnes = (adultos.value * 650) + (criancas.value / 2) * 650
        let qntdCerveja = adultos.value * 2000
        let qntdRefrigerante = (adultos.value * 1500) + (criancas.value / 2) * 1500

        resultado.innerHTML = `<p>${qntdCarnes/1000} Kg de Carne</p>`
        resultado.innerHTML += `<p>${Math.ceil(qntdCerveja/355)} Latas de Cerveja</p>`
        resultado.innerHTML += `<p>${Math.ceil(qntdRefrigerante/1000)} Garrafas de Refrigerante</p>`
    }
}