
function titleChange(){
    
    let t = document.getElementById("title")
    let newT = document.getElementById("newTitle")
    if(newT.value != ""){
        t.innerText = newT.value
    }else{
        alert("Preencha o campo com qualquer conteudo")
    }
}