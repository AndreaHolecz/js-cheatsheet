//SAJAT->
//Scope - a valtozok elerhetoseget hatarozza meg

{let x = 2}
//Block Scope - a {}blokkon beluli valtozok nem erhetoek el a blokkon kivulrol
{var x = 2}
//a blokkon beluli valtozok elerhetoek a blokkon kivulrol

function myFunction() {
    let carName = "Volvo"; //Local Scope - hasznalhato a carName
} //nem hasznalhato a carName

function myFunction() {
    var carName = "Volvo"; //Function Scope
}
function myFunction() {
    let carName = "Volvo"; // Function Scope
  }
  function myFunction() {
    const carName = "Volvo"; // Function Scope
  }

//a fuggveny parameterei a fuggveny definícioban felsorolt nevek
//a fuggveny argumentumai a fuggvenynek atadott valos ertekek
function myFunction(x, y) {
    if (y === undefined) {
      y = 2;
    }
  }
  function myFunction(x, y = 2) {} //engedejezi az alapertelmezett parametereket


x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
//a fuggvenynek a beepitett objectumait nevezzuk argumentum objectumnak
//<-SAJAT
