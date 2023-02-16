function cronometro(){

    

    var q = document.getElementById("dias");
    var d = new Date();
    var dia =  d.getDate();
    var m  = d.getMonth()+1;
    var horas = d.getHours()-24;
    var min = d.getMinutes()-60;
    var s = d.getSeconds()-60;



    
     
    const data = 31  - dia;

    const mes = 10;


    
    
    //hallowen data 


    q.innerHTML = `${data} dias ${horas}
     hrs  ${min} min 
      e ${s} s` ;
   
    
   
      setInterval(cronometro,1000);


}



   


