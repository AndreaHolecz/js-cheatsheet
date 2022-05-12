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


function nthSmallest(arr, pos){
    //arr.sort(function(a, b){return a - b});
    //arr.sort((a, b) => a - b); -ez a 2 ugyanaz
    arr.sort((min, max) => min - max);
    console.log(arr[pos-1])
    return arr[pos-1]
    //pos = position, azert minusz egy mert a 0. az elso elem
}