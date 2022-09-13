let login = document.getElementById("login")
let senha = document.getElementById("senha")
let confirmacao = document.getElementById("confirmacao")
let resposta = document.getElementById("resposta")

function confirmar(){
    if((login.innerText === "") || (senha.innerText === "") || (confirmacao.innerText === "")){
        resposta.innerText = "um dos campos esta vazio. Nao pode!!!"
        //console.log("um dos campos esta vazio. Nao pode!!!")
    }
    if(senha.value != confirmacao.value){
        resposta.innerText = "confirmacao nao condiz com a senha"
        //console.log("confirmacao nao condiz com a senha")
    }
    if(senha.value === confirmacao.value){
        resposta.innerText = "tudo certo. parabens, corno"
        //console.log("tudo certo. parabens, corno")
    }

}
