function mutation(arr) {
 let result;
 let arrWordsLetters = [];
 arrWordsLetters[0] = arr[0].toLowerCase();
 arrWordsLetters[1] = arr[1].toLowerCase();

let arrLetters = [];
arrLetters = arrWordsLetters[1].match(/\w/g);
console.log(arrWordsLetters[0]);
console.log(arrLetters);

console.log(arrWordsLetters[0].indexOf(arrLetters[2]));

for (let i = 0; i < arrWordsLetters[1].length; i++) {
   if (arrWordsLetters[0].includes(arrLetters[i]) == false) {
     return false;
   } else {
     result = true;
   }
}
     return result;
}


