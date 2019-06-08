function Conselhos(){
    var texto = "";
    for(var linha = 10 ; linha > 0; linha--){
        for(var ponto = 0 ; ponto < linha ; ponto++){
            texto += "-";
        }
        texto += "<br>";
    }
    document.getElementById("resposta").innerHTML += texto;
    document.getElementById("resposta").innerHTML += "Seja <b>bom</b>";
}

document.getElementById("btMensagens").addEventListener("click" , Conselhos);