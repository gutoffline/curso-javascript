var fotos = ['foto1.png' , 'foto2.png' , 'foto3.png'];
var legendas = ['Homem Aranha' , 'Vingadores' , 'Capitã Marvel'];

var fotoAtual = 0;

TrocarFotos(0);

setInterval(function(){
    fotoAtual++;
    if(fotoAtual > 2){
        fotoAtual = 0;
    }
    TrocarFotos(fotoAtual);
} , 3000);

function TrocarFotos(foto){
    $('.imagem-banner').attr('src' , 'imagens/' + fotos[foto]).attr('alt' , legendas[foto]);
    $('.legenda').html(legendas[foto]);
    $('.banner button').addClass('preto-e-branco');
    $('#btFoto' + (foto+1)).removeClass('preto-e-branco');
}

function CadastrarEmail(){
    var nome = $('#nome').val();
    var email = $('#email').val();
    $('#nome').val('');
    $('#email').val('');
    $('.resposta').html('Olá <b>' + nome + '</b> seu e-mail( <i>' + email + '</i> ) foi cadastrado com sucesso!');
}

$('#cadastrar').click(CadastrarEmail);

$('#btFoto1').click(function(){
    TrocarFotos(0);
});

$('#btFoto2').click(function(){
    TrocarFotos(1);
});

$('#btFoto3').click(function(){
    TrocarFotos(2);
});

$('#ExibirEsconder').click(function(){
    $('.formulario').toggle();
});