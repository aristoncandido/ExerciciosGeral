function hora()
{

    var m = document.getElementById('mostrar');

   var h =  new Date();

   m.innerHTML = `${h}`

  

}



function loop (){

    setInterval(1000,hora())

}
