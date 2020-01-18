function confirmEnding(str, target) {
 // "Never give up and good luck will find you."
 // -- Falcor
//Определяем позицию, с которой проводить проверку соответсвия
let total = str.length - target.length;

if (str.substring(total) == target) {
   return true;
} else {
 return false;
}
}


