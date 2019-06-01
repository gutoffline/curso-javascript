function BemVindo(){
    var dataCompleta = new Date();
    console.log(dataCompleta);
    console.log(dataCompleta.getDay()); // dia da semana
    console.log(dataCompleta.getDate()); // dia do mês
    console.log(dataCompleta.getMonth()); // mês
    console.log(dataCompleta.getFullYear()); // ano
    console.log(dataCompleta.getHours()); // hora
    console.log(dataCompleta.getMinutes()); // minutos

    if(dataCompleta.getHours() < 12 ){
        console.log("Bom dia");
    }else if(dataCompleta.getHours() < 19){
        console.log("Boa tarde");
    }else{
        console.log("Boa noite");
    }

}