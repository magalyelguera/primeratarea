//Creamos una función y utilizamos el método getElementById

function resultado() {
  //declaramos las variables
let p1, p2, p3, nota;
//Identificamos las respuestas y le asignamos valores
//1ª pregunta
if (document.getElementById('p11').checked==true) {
  p1=1
}else {
  p1=0
}
// 2ª pregunta
if (document.getElementById('p22').checked==true) {
  p2=1
}else {
  p2=0
}
// 3ª pregunta
if (document.getElementById('p33').checked==true) {
  p3=1
}else {
  p3=0
}

//Sumamos respuestas y mostramos aciertos
nota=p1+p2+p3;
alert(" Aciertos: " + nota);

}
