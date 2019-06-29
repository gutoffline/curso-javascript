// setTimeout(function(){ 
//     var pikachu = "p3.png";
//     document.querySelector(".pokemon-foto").src="imagens/" + pikachu;
//     alert("Pikachu");
// }, 3000);

// setTimeout(function(){ 
//     var charmander = "p2.png";
//     document.querySelector(".pokemon-foto").src="imagens/" + charmander;
//     alert("charmander");
// }, 10000);

// setTimeout(function(){ 
//     var psyduck = "p1.png";
//     document.querySelector(".pokemon-foto").src="imagens/" + psyduck;
//     alert("psyduck");
    
// }, 20000);

var pokemon = ["p1.png" , "p2.png" , "p3.png" , "p4.png"];
var pokemonNome = ["Psyduck" , "Charmander", "Pikachu", "Squirtle"];
var sorteio = Math.floor(Math.random() * pokemon.length);

document.querySelector(".pokemon-foto").src="imagens/" + pokemon[sorteio];

function Resolver(resposta){
    if(resposta == pokemonNome[sorteio]){
        alert("Parabéns!!!\nVocê acertou.");
    }else{
        alert("Que pena!\nTente outra vez.");
    }
    document.querySelector("#pokemon-nome").innerHTML = pokemonNome[sorteio];
    document.querySelector(".pokemon-foto").style="filter:brightness(1)";
}

function Ajuda(){
    var html = "";
    var imagem = "";
    for(var i = 0 ; i < pokemon.length ; i++){
        imagem = "<img src='imagens/" + pokemon[i] + "'>";
        html += "<span>" + imagem + "<br>" + pokemonNome[i] + "</span>";
    }

    document.querySelector("#pokemon-ajuda").innerHTML=html;
}

function GerarBotoes(){
    var botao = "";
    for(var i = 0; i < pokemon.length ; i++){
        botao += "<button type=\"button\" onclick=\"Resolver('" + pokemonNome[i] + "');\">" + pokemonNome[i] + "</button>";
    }
    document.querySelector("#botoes").innerHTML = botao;
}