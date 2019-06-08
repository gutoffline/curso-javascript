// function Carros(){
//     //repetir 3 vezes
//     alert("Fiat");
// }

// function Animais(){
//     for(contador = 0 ; contador <= 5 ; contador++){
//         alert("Gato");
//         console.log("CONTADOR ==> " + contador);
//     }

//     console.log("Terminou");
// }

// function Futebol(){
//     //repetir 10 vezes
//     alert("Copa do Mundo 2019");
// }



function Animais(){
    var confirmacao = true;
    while(confirmacao){
        alert("Gato");
        confirmacao = confirm("Deseja exibir de novo?");
    }
}

function Futebol(){
    //10 vezes
    alert("Copa do Mundo 2019");
}

function Carros(){
    //3 vezes
    alert("Fiat");
}




document.getElementById("btAnimal").addEventListener("click", Animais);
document.getElementById("btFutebol").addEventListener("click", Futebol);
document.getElementById("btCarros").addEventListener("click" , Carros);