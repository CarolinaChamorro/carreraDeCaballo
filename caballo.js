function Caballo(nombre,raza) {
    //Propiedades
    this.nombre = nombre;
    this.raza = raza;
    this.avance = [];
    //Métodos
    this.avanzar = avanzar;
    this.totalRecorrido = totalRecorrido;
}

function avanzar() {

    //var recorrido = Math.floor(Math.random() * 6) + 1;
    //this.avance.push(recorrido);
    //return recorrido;
    this.avance.push(Math.floor(Math.random() * 6) + 1);
    console.log(this.nombre + " corre " + this.avance[this.avance.length-1] + " metros.");
    return this.avance[this.avance.length-1];

}

function totalRecorrido() {
    //devuelve la suma d e lo avanzado
    return this.avance.reduce(sumar);
}

function sumar(sumaTotal,avance) {
    return sumaTotal + avance;
}
function meMuevo1() {
    var elem1 = document.getElementById("animate1");
    var posicion1 = elem1.getBoundingClientRect();
    //console.log(posicion1.top, posicion1.right, posicion1.bottom, posicion1.left);
    var acu1=0;
    var pos1 = 0;
  
      //console.log(posicion1.left*1);
      
      if (posicion1.left*1==472){
      elem1.style.left =0+"px";
      pos1=0;
      }
      else{
    for (;pos1 <=50;){
    
    elem1.style.left = (posicion1.left+ pos1 )+"px"; 
      
    pos1++;
  
      }}
    
    return pos1;
  }
  function meMuevo2() {
    var elem2 = document.getElementById("animate2");
    var posicion2 = elem2.getBoundingClientRect();
    //console.log(posicion2.top, posicion2.right, posicion2.bottom, posicion2.left);
    var acu2=0;
    var pos2 = 0;
  
      //console.log(posicion2.left*1);
      
      if (posicion2.left*1==472){
      elem2.style.left =0+"px";
      po2s=0;
      }
      else{
    for (;pos2 <=50;){
    
    elem2.style.left = (posicion2.left+ pos2 )+"px"; 
      
    pos2++;
  
      }}
    
    return pos2;
  }
