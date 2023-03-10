function iniciaCronometro(){
    let segundos = 10;
    let minutos = 0;
    let segundosTexto;
    let minutosTexto;

    function actualizaContador(){
        segundos--;
        if(segundos < 0) {
            segundos = 59;
            minutos--;
        }
        if(minutos < 0) {
            segundos = 0;
            minutos = 0;
            clearInterval(cronometro);
            timeOver();
        }
        segundosTexto = segundos;
        minutosTexto = minutos;
        if(segundos < 10){
            segundosTexto = `0${segundos}`;
        }
        if(minutos < 10){
            minutosTexto = `0${minutos}`;
        }

        document.getElementById('minutos').innerText = minutosTexto;
        document.getElementById('segundos').innerText = segundosTexto;

    }
    cronometro = setInterval(actualizaContador, 1000);
}