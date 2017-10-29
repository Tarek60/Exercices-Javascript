function calcul(){

  var premier_nombre = document.getElementById('premier_nombre').value ;
  var deuxieme_nombre = document.getElementById('deuxieme_nombre').value;
  if(isNaN(premier_nombre) == false && isNaN(deuxieme_nombre) == false && (deuxieme_nombre) != 0) {

  var result = (premier_nombre) % (deuxieme_nombre);
  alert(result);
  }

}
