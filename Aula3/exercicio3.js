function Verificacao(){
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    if(idade >= 18){
        document.getElementById("resposta").innerText = nome + " você é MAIOR de idade";
    }else{
        document.getElementById("resposta").innerText = nome + " você é MENOR de idade";
    }
}