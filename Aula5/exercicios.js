// 1) A missão consiste em repetir uma mesma frase uma certa quantidade de vezes. Nós já fizemos isso no exemplo sobre laço de repetição, para essa missão vamos perguntar para o usuário quantas vezes ele quer repetir a mensagem. Vamos criar uma variável para ser nosso contador e perguntar quantas vezes ele deseja repetir a mensagem. 
function Exercicio1(){
    var frase = prompt("Informe uma frase");
    var quantidade = prompt("Informe a quantidade de vezes que essa frase deve se repetir");
    for(i = 0 ; i < quantidade ; i++){
        document.getElementById("resposta").innerHTML += frase + "<br>";
    }
}


// 2) Vamos fazer um programa para calcular a média de um aluno. Ao apresentar o resultado, o programa deve perguntar se gostaria de calcular a média de outro aluno, caso a resposta seja SIM, o programa deve executar novamente.
function Exercicio2(){
    var outro = true;
    var aluno, nota1, nota2, nota3, nota4, media;
    while(outro){
        aluno = prompt("Informe o nome do aluno");
        nota1 = prompt("Informe a nota 1 de " + aluno);
        nota2 = prompt("Informe a nota 2 de " + aluno);
        nota3 = prompt("Informe a nota 3 de " + aluno);
        nota4 = prompt("Informe a nota 4 de " + aluno);
        media = ( parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) ) / 4;
        outro = confirm("A média de " + aluno + " é " + media + ". \nDeseja calcular a média de outro aluno? ");
    }
}


// 3) Nosso programa vai calcular a média de quantos números o usuário quiser digitar. Relembrando o cálculo da média é a SOMA DE TODOS OS NÚMEROS DIVIDIDO PELA QUANTIDADE DE NÚMEROS. Por exemplo, se eu tenho 3 números, a média é a soma desses 3 números dividido por 3.

function Exercicio3(){
    var outro = true;
    var total=0, media=0, contador=0, numero = 0;
    while(outro){
        contador++;
        numero = prompt("Informe um número");
        total += parseFloat(numero);
        outro = confirm("Deseja informar outro número?");
    }
    media = total / contador;
    alert("A média dos números digitados é " + media);  
}

// 4)Vamos criar um contador que vai de 0 à 10 aumentando de um em um, e depois volta de 10 à 0 diminuindo de um em um.
function Exercicio4(){
    for(var i = 0 ; i <=10 ; i++){
        console.log(i);
    }
    for(var i = 9; i >=0 ; i--){
        console.log(i);
    }
}

document.getElementById("btExercicio1").addEventListener("click" , Exercicio1);
document.getElementById("btExercicio2").addEventListener("click" , Exercicio2);
document.getElementById("btExercicio3").addEventListener("click" , Exercicio3);
document.getElementById("btExercicio4").addEventListener("click" , Exercicio4);