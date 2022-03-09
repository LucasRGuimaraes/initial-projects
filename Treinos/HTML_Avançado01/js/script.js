
let lista = document.getElementById("lista")

let numero = parseInt(lista.dataset.n)

for (let index = 1; index <= numero; index++) {
    
    lista.innerHTML += `<li id="${index}"> ${index}`
}