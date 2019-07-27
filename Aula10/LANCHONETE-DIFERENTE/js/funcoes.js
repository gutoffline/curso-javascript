var arrProdutos = ["Dogão Simples" , "Dogão Duplo" , "X-Salada" , "X-Egg" , "X-Bacon"];
var arrPrecos = [6.25 , 6.75 , 10.75 , 11.75 , 13.50];

var arrTotalItens = [0,0,0,0,0];
var arrTotalQuantidades = [0,0,0,0,0];

function MontaCardapio(){
    var cardapio_montado = "";
    for(i = 0; i < arrPrecos.length ; i++){
        cardapio_montado += "<tr>";
        cardapio_montado += "<td>00" + (i+1) + "</td>";
        cardapio_montado += "<td>" + arrProdutos[i] + "</td>";
        cardapio_montado += "<td>R$ " + arrPrecos[i].toFixed(2).replace(".",",") + "</td>";
        cardapio_montado += "<td><img src='img/delete.png' class='excluir'></td>";
        cardapio_montado += "<tr>";
    }
    return cardapio_montado;
}

function AdicionaItem(opcao , quantidade){
    arrTotalItens[opcao-1] += arrPrecos[opcao-1] * parseInt(quantidade);
    arrTotalQuantidades[opcao-1] += parseInt(quantidade);
    var linha = "";
    var tamanho = arrTotalItens.length;
    for(i=0 ; i < tamanho ; i++){
        if(arrTotalItens[i]>0){
            linha += "<tr>";
            linha += "<td>00" + (i+1) + "</td>";
            linha += "<td>" + arrProdutos[i] + "</td>";
            linha += "<td>" + arrTotalQuantidades[i] + "</td>";
            linha += "<td>" + arrPrecos[i] + "</td>";
            linha += "<td>" + arrTotalItens[i] + "</td>";
            linha += "<td><img src='img/delete.png' class='excluir'></td>";
            linha += "</tr>";
        }
    }
    
    $("#Tabela-Pedido").html(linha);
    TotalPedido();
}

function TotalPedido(){
    var totalGeral = 0;
    $.each(arrTotalItens, function(k , v){
        totalGeral += v;
    });
    $("#Total-Pedido").html(totalGeral);

    taxaServico = totalGeral * (10/100);
    totalPagar = taxaServico + totalGeral;
    $("#Taxa-Servico").html(taxaServico);
    $("#Total-Pagar").html(totalPagar);
}

function RetornaListaProdutos(obj){
    var lista = "";
    $.each(arrProdutos, function(k , v){
        lista += "<"+obj+" value='" + (k+1) + "'>"+ v +"</"+ obj +">";
    });
    return lista;
}

function Principal(){
    var cardapio = MontaCardapio();
    $("#Tabela-Cardapio").html(cardapio);
}

function AdicionaProduto(){
    arrProdutos.push($("#descricao").val());
    arrPrecos.push(parseFloat($("#preco").val().replace(",",".")));
    arrTotalItens.push(0);
    arrTotalQuantidades.push(0);
}

$(document).ready(function(){
    $("#relatorio").click(function(){
        var doc = new jsPDF();
        doc.text($('#cupom').html(),1,1)
	    doc.save('cupom-fiscal.pdf');
    });

    $("#Add-Pedido").click(function (){
        AdicionaItem($("#produtos").val() , $("#quantidade").val());
    });

    $("#Add-Produto").click(function(){
        AdicionaProduto();
        Principal();
        $("#produtos").html(RetornaListaProdutos("option"));
        $("#produtos").select2();
    });

    $(document).on("click",".excluir", function(){
        c = $(this).parent().parent();
        c = c.find(":nth-child(2)").text();
        console.dir(c);
    });
    
    Principal();
    $("#produtos").html(RetornaListaProdutos("option"));

    $("#produtos").select2();
    $("#codigo").mask("000");
    $("#preco").mask("#.#00,00", {reverse:true});
    $('.tab_wrapper').champ();
    
    $('#slider').nivoSlider({prevText: 'Anterior', nextText: 'Próximo'}); 

    $('.galeria').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
          
});
