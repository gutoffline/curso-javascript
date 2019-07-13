var fotos = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'];
var legendas = ['Homem Aranha' , 'Vingadores' , 'Capitã Marvel'];

var fotoAtual = 0;

TrocarFotos(fotoAtual);

setInterval(function(){
    fotoAtual++;
    if(fotoAtual > 2){
        fotoAtual = 0;
    }
    TrocarFotos(fotoAtual);
} , 3000);

function TrocarFotos( foto ){
    document.querySelector('.imagem-banner').src = 'imagens/' + fotos[foto];
    document.querySelector('.imagem-banner').alt = legendas[foto];
    document.querySelector('.legenda').innerHTML = legendas[foto];
}

function CadastrarEmail(){
    var nome = document.querySelector('#nome').value;
    var email = document.querySelector('#email').value;
    document.querySelector('#nome').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('.resposta').innerHTML = "Olá <b>" + nome + "</b> seu e-mail(<i>" + email + "</i>) foi cadastrado com sucesso.";
}

document.querySelector('#cadastrar').addEventListener('click',CadastrarEmail);

document.querySelector('#btFoto1').addEventListener('click',function(){
    TrocarFotos(0);
});

document.querySelector('#btFoto2').addEventListener('click', function(){
    TrocarFotos(1);
});

document.querySelector('#btFoto3').addEventListener('click', function(){
    TrocarFotos(2);
});
