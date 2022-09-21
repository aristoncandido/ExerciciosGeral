var q = 0; 
//iniciando a variavél de cliques e sua contabilidade


function clicar(){  //criando a função clicar 
    const qntd  = document.getElementById("qntd");
    q++;
    qntd.innerHTML =`  No total foram efetuados  <mark>${q}</mark> cliques`

}

function zerar()  //criando a função zerar
{
    const qntd  = document.getElementById("qntd");
    q = 0;
    qntd.innerHTML="" 
}







