


 var idade;
 var nome;
 var crianca;
 var altura;


 














function Calcular(){


    var n = document.getElementById("num");
    var resultado = document.getElementById("resultado");

    var valor = n.value;


    if(valor >50 || valor < 0) {
            
        alert("Digite um número entre 1 e 50");

        n.innerHTML="0"


    }else{
            

            if( resultado.innerHTML=="" ){
                    
                    Fatorar(valor);
        
            }
            else{
                resultado.innerHTML=""
                Fatorar(valor);
            }
        

    }

    
 
   

}



function Fatorar(x){
  
     
    var resultado = document.getElementById("resultado");
    var valor = document.getElementById("valor");


    var cont;
    var x ;
    var y = 1;


    for(cont = 1; cont <= x ; cont++){
        
        y = y * cont;
        
        resultado.innerHTML += cont + " x "

    


    }
    
    resultado.innerHTML += `= ${y}`;




     
     

    

   

}




var s = "chupeta";





console.log(s.slice(0,4));





