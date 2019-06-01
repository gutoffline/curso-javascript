function Jogo(chute){
    var tentativa = 0;
    var respostaCerta = 7;
    document.getElementById("mensagem").innerHTML = "<b>Início de Jogo</b><br>";

    if(chute == respostaCerta){
        document.getElementById("mensagem").innerHTML +=  "===> Parabéns! Você ganhou.";
    }else{
        document.getElementById("mensagem").innerHTML += "===> Que pena, você perdeu!";
        if(chute > respostaCerta){
            document.getElementById("mensagem").innerHTML += "<br> <i>Dica: tente um número mais <b>BAIXO</b></i>";
        }else{
            document.getElementById("mensagem").innerHTML += "<br> <i>Dica: tente um número mais <b>ALTO</b></i>";
        }
    }
    document.getElementById("mensagem").innerHTML += "<br><b>Fim de Jogo</b>";
}

function ParImpar(){
    var numeroUsuario = document.getElementById("valor").value;
    var numeroComputador = Math.floor(Math.random() * 10);
    var total = numeroComputador + parseInt(numeroUsuario);
    document.getElementById("respostaParImpar").innerHTML = "Computador: " + numeroComputador;
    if(total % 2 == 0){
        document.getElementById("respostaParImpar").innerHTML += "<br> PAR";
        if(document.getElementById("par").checked){
            document.getElementById("respostaParImpar").innerHTML += "<br>GANHOU!!!";
        }else{
            document.getElementById("respostaParImpar").innerHTML += "<br> PERDEU!!!";
        }
    }else{
        document.getElementById("respostaParImpar").innerHTML += "<br> ÍMPAR";
        if(document.getElementById("impar").checked){
            document.getElementById("respostaParImpar").innerHTML += "<br> GANHOU!!!";
        }else{
            document.getElementById("respostaParImpar").innerHTML += "<br> PERDEU!!!";
        }
    }
}

function CalcularPagamento(){
    var valor = parseFloat(document.getElementById("valorPagar").value);
    if(document.getElementById("dinheiro").checked){
        document.getElementById("totalPagar").value = valor - valor * 0.1;
    }else{
        document.getElementById("totalPagar").value = valor;
    }
}

BemVindo();