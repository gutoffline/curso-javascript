
// exibe uma mensagem no console
console.log("Mensagem");

/*
    saída de dados para o usuário:
        alert("teste");
        document.write("Teste");

    entrada de dados:
        var nome = prompt("Informe seu nome");
        var confirmacao = confirm("Continuar?");
    
    declarando varável:
        var nome_variável;
        
        --> nome da variável não pode ter caracteres especiais e espaço
*/

console.log(true); // tipo de dado booleano
console.log("Guto"); // tipo de dado texto
console.log(27.3); // tipo de dado numério

/*
    TIPOS DE DADOS
    Texto(string) ---> "Guto" , "100"
    Booleano --> true , false
    Numérico 
        Inteiro (int) --> 10 --> parseInt()
        Decimal (float) --> 13.7 (utiliza o PONTO e não a vígula) --> parseFloat()
*/

/*

    Operadores relacionais
    > maior
    < menor
    >= maior ou igual
    <= menor ou igual
    != diferente
    == igual (valor)
    === igual (valor e tipo)

*/

function BemVindo(){
    var nome = prompt("Qual é o seu nome?");
    alert("Seja bem vindo(a) " + nome + ".\nEspero que goste de nosso site!");
}

function Somar(){
    var numero1, numero2, total;
    numero1 = prompt("Informe o primeiro número");
    numero2 = prompt("Informe o segundo número");
    total = parseFloat(numero1) + parseFloat(numero2);
    alert("O resultado da operação é: " + total);
}

function Subtrair(){
    var numero1 , numero2, total;
    numero1 = prompt("Informe o primeiro número");
    numero2 = prompt("Informe o segundo número");
    total = numero1 - numero2;
    alert("O resultado da operação é: " + total);
}

function Dividir(){
    var numero1 , numero2, total;
    numero1 = prompt("Informe o primeiro número");
    numero2 = prompt("Informe o segundo número");
    total = numero1 / numero2;
    alert("O resultado da operação é: " + total);
}

function Multiplicar(){
    var numero1 , numero2, total;
    numero1 = prompt("Informe o primeiro número");
    numero2 = prompt("Informe o segundo número");
    total = numero1 * numero2;
    alert("O resultado da operação é: " + total);
}

function Jogo(){
    var palpite = prompt("Escolha um número entre 0 e 10:");
    var numeroAleatorio = Math.floor(Math.random() * 10);
    console.log(numeroAleatorio);
    
    if(palpite == numeroAleatorio){
        //verdadeiro
        alert("Parabéns! Você ganhou o jogo.");
    }else{
        //falso
        alert("Tente novamente.");
    }
}