function Sortear(){
 
    var r = document.getElementById("resultado");

    var n  =  Math.random();
    
    var num = Math.round (n*100);

    r.innerHTML= `O número Sorteado foi : ${num}`;


}
function Limpar(){
    var r = document.getElementById("resultado");
    
    r.innerHTML="";
}