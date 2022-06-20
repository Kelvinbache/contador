'use strict';

const numerosEnPantlla = document.getElementById("numero");
const boton1 = document.getElementById("btn1");
const boton2 = document.getElementById("btn2"); 


/*primero para aumentar*/
boton1.addEventListener("click",aumentar);

 /*donde comienxa*/   
let comienxo = 0;

function aumentar(){
/*cada ves esta sumando 1 */ 
 comienxo ++;
 numerosEnPantlla.textContent = comienxo;

};


boton2.addEventListener("click",restar);

function restar() {
/*la funcion esta restando 1 */  
    if (comienxo == 0){} 
else {
      comienxo --;
}
 /*lo pasa en pantalla*/   
 numerosEnPantlla.textContent = comienxo; 
}


