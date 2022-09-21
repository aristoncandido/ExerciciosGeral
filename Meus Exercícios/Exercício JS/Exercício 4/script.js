function ShowTime(){

    var rel = document.getElementById("relogio");




    var time = new Date();

    var hora  = time.getHours();

    var minuto = time.getMinutes();

    var segundo = time.getSeconds();

    var m ;

    if(hora <12){
         m = "AM"
    }else if(hora>12){
        m = "PM"
    }
    
    rel.innerHTML = `${hora}:${minuto}:${segundo} ${m}`;

}

setInterval(ShowTime,1000)
