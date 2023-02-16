








function ShowTime() {

    var rel = document.getElementById("horario");
    var m = document.getElementById("turno");
    var d = document.getElementById("data")


    var time = new Date();

    var hora = time.getHours();

    var minuto = time.getMinutes();

    var segundo = time.getSeconds();

    var data = time.getDay();

    var turno;

    if (hora < 12) {
        turno = "AM"
    } else if (hora >= 12) {
        turno = "PM"
    }



    switch (data) {

        case 0:
            
            data = "Domingo";

            break;

        case 1:

            data = "Segunda-Feira";

            break;

        case 2:

            data = "Terça-Feira";
            break;

        case 3:

            data = "Quarta-Feira";
            break;

        case 4:
            data = "Quinta-Feira";
            break;

        case 5:
            data = "Sexta-Feira";

            break;


        case 6:
            data = "Sábado";

            break;
    }








    /*formatação do SEGUNDOS, HORA E MINUTOS */
    if (segundo < 10) {

        rel.innerHTML = `${hora}:${minuto}:0${segundo}`;
        m.innerHTML = `${turno}`;
        d.innerHTML = `${data}`;

    } else {

        rel.innerHTML = `${hora}:${minuto}:${segundo}`;
        m.innerHTML = `${turno}`;
        d.innerHTML = `${data}`;

    }








}

setInterval(ShowTime, 0.8)
