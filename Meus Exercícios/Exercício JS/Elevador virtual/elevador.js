


var andar = Number(prompt("Qual andar você está:"))


var andar_final= Number(prompt("Qual andar você quer ir :"))


if(andar > 0 && andar <= 16 && andar_final <= 16){

          //se o andar tiver abaixo do final
        if(andar < andar_final ){
              
            while (andar < andar_final){
                    document.writeln(`Você está passando pelo ${andar}° andar </br>`)
                    andar++;


                }
                    document.writeln(`Você está no ${andar}° andar . </br> Você chegou no seu destino :D`)
            
        } 
            //se o andar for acima do final
        else if(andar > andar_final){
                
             while (andar > andar_final){
                    document.writeln(`Você está descendo pelo ${andar}° andar </br>`)
                    andar--;


                }
                    document.writeln(`Você está no ${andar}° andar . </br> Você chegou no seu destino :D`)
            

        }else if(andar == andar_final){
    
            alert("Você já está no andar desejado!")


        }else{
            alert('andar inexistente')
        }


}else{

    alert("Andar inexistente")
}