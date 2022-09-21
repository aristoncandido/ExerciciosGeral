function ShowTime(){

    var rel = document.getElementById("horario");
    var m = document.getElementById("turno");



    var time = new Date();

    var hora  = time.getHours();

    var minuto = time.getMinutes();

    var segundo = time.getSeconds();

    var turno ;

    if(hora <12){
         turno = "AM"
    }else if(hora>12){
        turno = "PM"
    }

    /*formatação do SEGUNDOS, HORA E MINUTOS */
    if(segundo < 10 ){

        rel.innerHTML = `${hora}:${minuto}:0${segundo}`;
        m.innerHTML = `${turno}`;

    }else{
              
      rel.innerHTML = `${hora}:${minuto}:${segundo}`;
      m.innerHTML = `${turno}`;

    }
   




}

setInterval(ShowTime,0.8)
