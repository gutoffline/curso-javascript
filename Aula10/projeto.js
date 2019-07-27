$(document).ready(function(){

    CarregarCardapio();

    $('.abas').champ();

    $('#slider').nivoSlider();

    $('.galeria').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });

});


function CarregarTexto(){
    alert("Carregar o texto");
    /* 
    AJAX
    Asynchronous JAvascript and Xml
    */

   $.ajax({
       url: 'http://cozinhapp.sergiolopes.org/produtos',
       success: function(conteudo){
            console.dir(conteudo);
            $('#resultado').html(conteudo);
       }
   });
}

function CarregarCardapio(){
    $.ajax({
        url: 'cardapio.txt',
//        url: 'http://cozinhapp.sergiolopes.org/produtos',
        success: function(conteudo){
            console.dir(conteudo);
            $('#cardapio-inicial').html(conteudo);
        }
    });
}

function PesquisarEndereco(){
    var cep = $('#cep').val();
    $.ajax({
        url: 'https://viacep.com.br/ws/'+ cep +'/json/',
        beforeSend:function(){
            alert("Carregando");
            $('#endereco-completo').html('<img src="img/ajax-loader.gif">');

        },
        success: function(conteudo){
            console.dir(conteudo);
            var endereco ="";
            endereco = "Rua: " + conteudo.logradouro;
            endereco += " - Bairro: " + conteudo.bairro;
            endereco += " - Cidade: " + conteudo.localidade;
            endereco += " / Estado: " + conteudo.uf;
            $('#endereco-completo').html(endereco);
        },
        error: function(erro){
            $('#endereco-completo').html('CEP inválido');
            console.dir(erro);
        },
        complete: function(){
            alert("Ciclo completo");
        }
    });
}


function GerarPDF(){
    var arquivo = new jsPDF();
    arquivo.text('IMPRIMIR ENDEREÇO', 10, 10);
    arquivo.text('CLIENTES' , 10 , 20);
    arquivo.text($('#endereco-completo').html() , 10 , 30);
    arquivo.save('relatorio.pdf');
}