
let tela{

    n1:"",
    n2:"",
    operar :"";

};

  
   let  numero1= tela.n1;
   let numero2= tela n2;





function selecionar(valor) {
    
    let visor = document.querySelector('#visor')
  
    
    



    //implemetando a seleção do primeiro número
    if (visor.innerHTML === "" && numero1 ==="") {

        switch (valor) {

            case 1:
       
             visor.innerHTML+= "1";
             numero1 += "1";

            break;
            
            case 2:
       
             visor.innerHTML+= "2";
             numero1 += "2";

            break;
           
            case 3:
       
             visor.innerHTML+= "3";
            numero1 += "3";

            break;

            case 4:
       
             visor.innerHTML+= "4";
            numero1 += "4";

            break;

            case 5:
       
             visor.innerHTML+= "5";
            numero1 += "5";

            break;

            case 6:
       
             visor.innerHTML+= "6";
             numero1 += "6";

            break;

            case 7:
       
             visor.innerHTML+= "7";
             numero1 += "7";

            break;

            case 8:
       
             visor.innerHTML+= "8";
             numero1 += "8";

            break;

            case 9:
       
             visor.innerHTML+= "9";
            numero1 += "9";

            break;

            case 0:
       
                visor.innerHTML+= "0";
                numero1 += "0";
            break;
             
            default:
                alert("coloque um valor válido")


        }







    }else{
          
        
        switch (valor) {

            case 1:
       
             visor.innerHTML+= "1";
            numero2 += "1";

            break;
            
            case 2:
       
             visor.innerHTML+= "2";
             numero2 += "2";

            break;
           
            case 3:
       
             visor.innerHTML+= "3";
             numero2 += "3";

            break;

            case 4:
       
             visor.innerHTML+= "4";
             numero2 += "4";

            break;

            case 5:
       
             visor.innerHTML+= "5";
             numero2 += "5";

            break;

            case 6:
       
             visor.innerHTML+= "6";
            numero2 += "6";

            break;

            case 7:
       
             visor.innerHTML+= "7";
             numero2 += "7";

            break;

            case 8:
       
             visor.innerHTML+= "8";
             numero2 += "8";

            break;

            case 9:
       
             visor.innerHTML+= "9";
             numero2 += "9";

            break;

            case 0:
       
                visor.innerHTML+= "0";
                numero2 += "0";
            break;
             
            default:
                alert("coloque um valor válido")


        }


    }



    function operar(op){

        let visor = document.querySelector('#visor')

        switch(op){
            case '+':
                visor.innerHTML+="+"
                somar();
                 

             break;   

        }
    }









}



