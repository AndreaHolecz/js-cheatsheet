/* 
const, let, var kulcsszavakkal hozunk létre változókat

az egyenlőség jel bal oldalán szerepel a változó neve és jobb oldalán az ehhez tartozó érték

a primitívek a következők: szöveg azaz string, szám boolean azaz true/false, undefined és null


*/

let aString = "this is a string"; //MINDÍG idézőjelbe rajkuk a stringet, backtickel `` több soros stringet tudunk létrehozni, '' és "" meg csak 1 sorosat

let aNumber = 1; //nem szabad számot idézőjelbe tenni

let aBoolean = false; //nem szabad idézőjelbe tenni

let anUndefined = undefined; //nem szabad idézőjelbe

let aNull = null; //ezt se szabad idézőjelbe rakni

let notANumber = NaN; //ezt se rakjuk idézőjelbe

console.log(typeof aString) //ugyanugy kell felirnunk a valtozo nevet az egyiknel mint ahogy letrehoztuk

console.log(typeof anUndefined) //undefined a tipusa

console.log(typeof aNull) //object a tipusa

console.log(typeof notANumber) // szám a tipusa

console.log(aFunction1()); //ez is mukodik

function aFunction1() {
    //ez a fuggveny belseje
    
    //a fuggveny mindenkeppen returnol ha lefuttatjuk ha nem adjuk meg mit/return akk undefined
    
    return "this is a function" //*return lezarja a sorunkat, alatta levo dolgok nem futnak le
}

console.log(aFunction1());

const aFunction2 = function() {
    //ez is egy fuggven, ez majdnem ugyanugy viselkedik mintha a fuggvenynek neve lenne
    
    return "this is another function"
}

console.log(aFunction2()); //minden valtozoba mentett dolgunkhoz csak akk ferunk hozza amik utana jonnek


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

if(true){
    //ide jon ha teljesul a feltetel
    
}else{
    //ide jon ha nem teljesul a feltetel
}

console.log("0" == 0);

console.log("0" === 0);
//3db = haszn osszehasonlitasra

//tömb/felsorolas - forciklussal lehet rajtuk vegigmenni
const arr = [34, 15, 88, 2] //ez egy tomb, negyzetes zarojelrol ism fel

for (let index = 0; index < arr.length; index++) {

    console.log(arr[index])
    
}

for (const item of arr) {
    console.log(item)
}
//*ez a 2 ugyanazt csinalja, a cikluson belul ugyanugy tudunk ifelni

