// var filmes = ['Karate Kid', 'Garotos Perdidos'];
// var posters = ['karate-kid.jpg' , 'garotos-perdidos.jpg'];
var ingressos = 0;
var filmes = [ 
    {  
        id: 0,
        nome: 'Star Wars - A Ameaça fantasma' ,  
        foto:'starwars.jpg',
        horario: '17:30',
        classificacao: '10 anos',
        sinopse: 'Obi-Wan e seu mentor embarcam em uma perigosa aventura na tentativa de salvar o planeta das garras de Darth Sidious. Durante a viagem, eles conhecem um habilidoso menino e decidem treiná-lo para se tornar um Jedi.'
    },
    {  
        id: 1,
        nome: 'A Teoria de Tudo' ,  
        foto:'teoria.jpg',
        horario: '13:30',
        classificacao: 'Livre',
        sinopse: 'Baseado na história de Stephen Hawking, o filme expõe como o astrofísico fez descobertas relevantes para o mundo da ciência, inclusive relacionadas ao tempo. '
    },
    {  
        id: 2,
        nome: 'Sniper Americano' ,  
        foto:'sniper.jpg',
        horario: '21:30',
        classificacao: '14 anos',
        sinopse: 'História real de Chris Kyle, atirador de elite das forças especiais da marinha dos Estados Unidos. Durante a guerra do Iraque, sua missão era uma só- proteger seus companheiros.'
    },
    {  
        id: 3,
        nome: 'Django Livre' ,  
        foto:'django.jpg',
        horario: '21:30',
        classificacao: '18 anos',
        sinopse: 'No sul dos Estados Unidos, anos antes da Guerra Civil, um ex-escravo Django faz uma aliança inesperada com o caçador de recompensas Schultz para caçar os criminosos mais procurados do país e resgatar sua esposa.'
    },
    {  
        id: 4,
        nome: 'A Árvore da Vida' ,  
        foto:'arvore.jpg',
        horario: '16:30',
        classificacao: 'Livre',
        sinopse: 'História de uma típica família americana dos anos 50, formada por um casal e três filhos. A rígida educação, o ambiente e o passado ainda permeiam a vida de Jack, o filho mais velho, que na vida adulta tenta se reconciliar com o pai.'
    },
];

function ListarFilmes(){
    var cartoes = "";
    for(var i = 0 ; i < filmes.length; i++){
        cartoes = MontaCartao(filmes[i]);
        $('.filmes').append(cartoes);
    }
}

function MontaCartao(filme){
    cartaoMontado = '<div class="cartao">';
    cartaoMontado += '<img src="imagens/' + filme.foto + '">';
    cartaoMontado += '<h3>' + filme.nome + '</h3>';
    cartaoMontado += '<button type="button" class="ver-mais">Ver mais</button>';
    cartaoMontado += '<div class="descricao">';
    cartaoMontado += '<ul>';
    cartaoMontado += '<li><strong>Horário:</strong> ' + filme.horario + '</li>';
    cartaoMontado += '<li><strong>Classificação:</strong> ' + filme.classificacao + '</li>';
    cartaoMontado += '<li><strong>Sinopse:</strong> ' + filme.sinopse +'</li>';
    cartaoMontado += '</ul>';
    cartaoMontado += '<button type="button" class="botao-comprar" onclick="ComprarIngresso('+ filme.id +');">Comprar</button>';
    cartaoMontado += '</div>';
    cartaoMontado += '</div>';
    return cartaoMontado;
}

function ComprarIngresso(codigoFilme){
    alert('Você irá comprar ingresso para o filme: ' + filmes[codigoFilme].nome);
    ingressos++;
    $('.ingressos').text(ingressos);
}

ListarFilmes();



$('.descricao').hide();

$('.ver-mais').click(function(){
    if($(this).text() == "Ver mais"){
        $(this).text("Ocultar");
    }else{
        $(this).text("Ver mais");
    }
    $(this).next().slideToggle();
});

$('#botao-carrinho').click(function(){
    $('.lista-ingressos').slideToggle();
});