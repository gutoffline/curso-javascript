function CalcularTotalProduto(){
    // alert("Aqui vamos calcular o preço total do produto");
    var preco = document.getElementById("preco").value;
    var quantidade = document.getElementById("quantidade").value;

    if(quantidade > 0){
        //VERDADEIRO
        document.getElementById("mensagem-quantidade").innerHTML = "";
    }else{
        //FALSO
        document.getElementById("mensagem-quantidade").innerHTML = "<b style='color:red'>Informe uma quantidade</b>";
    }

    if(preco > 0){
        document.getElementById("mensagem-preco").innerHTML = "";
    }else{
        document.getElementById("mensagem-preco").innerHTML = "<b style='color:red'>Informe um preço</b>";
    }

    document.getElementById("total-produto").innerText = preco * quantidade;
}

function AdicionarAoCarrinho(){
    var produto = document.getElementById("produto").value;
    if(produto.length > 5){
        document.getElementById("lista-produtos").innerHTML += produto + "<br>";
    }else{
        alert("ATENÇÃO - Produto inválido.");
    }
}

/*

Escreva um programa que o usuário deve informar o preço da gasolina e do etanol. O sistema deve informar qual o combustível mais vantajoso para o usuário.
Cálculo: 
	Gasolina * 0.7 
	Se o resultado maior que o preço do litro do etanol, abasteça com a gasolina;
	Se for menor, abasteça com etanol.
Exemplo:
Gasolina: 3,50
Etanol: 2,50

3,50 x 0,7 = 2,45. Complete com etanol!

*/