function Somar(){
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor1").value;
    document.getElementById("resposta").innerText = parseFloat(valor1) + parseFloat(valor2);
}

function Dividir(){
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor1").value;
    document.getElementById("resposta").innerText = parseFloat(valor1) / parseFloat(valor2);
}

function Multiplicar(){
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor1").value;
    document.getElementById("resposta").innerText = parseFloat(valor1) * parseFloat(valor2);
}

function Subtrair(){
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor1").value;
    document.getElementById("resposta").innerText = parseFloat(valor1) - parseFloat(valor2);
}