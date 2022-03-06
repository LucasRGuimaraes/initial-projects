
onload = function(){
    let txt = localStorage.getItem("resultado")
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = txt
}


function enviar(){

    let txt = document.getElementById("txt").value
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = txt

    localStorage.setItem("resultado", txt)
}

function limpar(){
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = "Resultado vai aparecer aqui"

    // localStorage.setItem("resultado", "Resultado vai aparecer aqui")
}