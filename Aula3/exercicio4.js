function Cadastrar(){
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;

    var linha = nome + " | " + telefone + " | " + email + "<br>";
    document.getElementById("cadastros").innerHTML += linha;

    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";

}