var cont = 0 ;
var w =0;
var h = 0;


function aumentar(){
  
   cont += 5 ;

    let bola = document.querySelector("#bola");


    


    
    bola.style.height = '10rem';

    bola.style.width = '10rem';



}

function diminuir(){
    let bola = document.querySelector("#bola");
    bola.style.height = '2rem';

    bola.style.width = '2rem';


}

