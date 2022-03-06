

var t1 = document.getElementById("t1")
var t2 = document.getElementById("t2")

t1.onclick = colocarEmMaiusculo
t2.onclick = colocarEmMaiusculo

function colocarEmMaiusculo(){
    this.innerHTML = this.innerHTML.toUpperCase()
}