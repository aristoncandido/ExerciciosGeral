
criarbtn();




function criarbtn() {



  //buscando acesso ao elemento body (pai) e criando a DIV
  //depois associamos ele a um elemento filho    



  var pai = document.body;
  var a = document.createElement('input');
  pai.appendChild(a);
  a.setAttribute("type", "button");
  a.setAttribute("value", "Clique Aqui")
  a.setAttribute("onclick", "btn()")




}

function btn() {

  //func botao chamando a criar   
  criar();

}

function criar() {
  var pai = document.body;
  var a = document.createElement('div');
  pai.appendChild(a);


}




