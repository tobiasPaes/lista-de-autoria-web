let textinho = document.getElementById("texto")

function mostrarOcultar(){
    
    if(textinho.innerText != ""){
        textinho.innerText = ""
    }else{
        textinho.innerText = "ola mundo, td bem com vc"
    }
    
    
    
    /*
    if(textinho.style.opacity === 1){
        textinho.style.opacity = 0
    }
    if(textinho.style.opacity === 0){
        textinho.style.opacity = 1
    }
    */
}