
var quantidade  = 0 ;


function Votar(x) {

    var visor = document.getElementById("tela");
    var candidato = document.getElementById("candidato");
    var nome = document.getElementById("nome_candidato");

    var valor = x;

    visor.innerHTML += `${valor}`;

    valor = parseInt(visor.innerHTML);
















    Verificar(valor);





}


function Confirmar() {
    confirm("Você Deseja votar nesse candidato?")
    var visor = document.getElementById("tela");
    var nome = document.getElementById("nome_candidato");
    nome.innerHTML = "Seu voto foi computado!"
    
    quantidade++;




    var valor;

    visor.innerHTML = ""





}

function Verificar(x) {

    var visor = document.getElementById("tela");
    var candidato = document.getElementById("candidato");
    var nome = document.getElementById("nome_candidato");

    if (x == 13) {



        candidato.style.display = "inline"

        candidato.setAttribute("src", "./img/lula.jpg");

        nome.innerHTML = "Luís Inácio Lula da Silva";

    } else if (x == 22) {
        
        candidato.style.display = "inline";
        candidato.setAttribute("src", "./img/bozo.jfif");

       nome.innerHTML = "Jair Bolsonaro"

    } else if(x == 44){
       
        candidato.style.display = "inline";
        candidato.setAttribute("src","./img/soraya.jpg");

        nome.innerHTML = "Soraya  Thronicke";


    } else if(x == 12){

        candidato.style.display = "inline";
        candidato.setAttribute("src","./img/Ciro.jpg");

        nome.innerHTML = "Ciro Gomes";



    }else if (x == 15){

        candidato.style.display = "inline";
        candidato.setAttribute("src","./img/simone.jpg");

        nome.innerHTML = "Simone Tebet";
    }

}



function Corrigir() {

    var visor = document.getElementById("tela");
    var candidato = document.getElementById("candidato");
    var nome = document.getElementById("nome_candidato");
    var v = document.querySelector(".votos");
    

    visor.innerHTML = "";
    candidato.style.display = "none";
    candidato.setAttribute("src", "");
    nome.innerHTML = "";
    v.innerHTML=""



}

function Branco() {
    var visor = document.getElementById("tela");
    confirm("Tem certeza que desja votar em BRANCO?");
    visor.innerHTML = "VOTO EM BRANCO";

}

function Relatorio(){
 
    var v = document.querySelector(".votos");
    
    var q  = quantidade;

    v.innerHTML = ` Ao todo foram computados ${q} votos`
     
     




}